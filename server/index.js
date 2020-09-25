const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Router = require('koa-router');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = new Koa();
const router = new Router();

router.get('/quote', async (ctx) => {
    const [rows] = await ctx.connection.execute('SELECT * FROM quote');
    ctx.status = 200;
    ctx.body = rows;
});
router.post('/quote', async (ctx) => {
    const quote = ctx.request.body;
    const [result] = await ctx.connection.execute(
        'INSERT INTO quote (text, color, backgroundColor) VALUES (?, ?, ?)',
        [quote.text, quote.color, quote.backgroundColor],
    );
    quote.id = result.insertId;
    ctx.status = 201;
    ctx.body = quote;
});
router.delete('/quote/:id', async (ctx) => {
    await ctx.connection.execute('DELETE FROM quote WHERE id = ?', [ctx.params.id]);
    ctx.status = 200;
});

app
    .use(cors())
    .use(bodyParser())
    .use(async (ctx, next) => {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'quotes',
        });
        ctx.connection = connection;
        await next();
        await connection.close();
    })
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3001);
