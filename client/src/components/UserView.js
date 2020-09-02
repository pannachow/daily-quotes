import React from "react";
import "./UserView.css";
import { Link } from "react-router-dom";


class UserView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredQuoteIndex: Math.floor(Math.random() * this.props.quotes.length),
        };
        setInterval(() => {
            const nextIndex = (this.state.featuredQuoteIndex + 1) % this.props.quotes.length;
            this.setState({
                featuredQuoteIndex: nextIndex
            });
        }, 5000);
    }

    render() {
        const quote = this.props.quotes[this.state.featuredQuoteIndex];
        const backgroundStyle = { backgroundColor: quote ? quote.backgroundColor : "white" };
        const quoteStyle = { color: quote ? quote.color : "black" };
        return (

            <div className="UserView" style={backgroundStyle}>
                <Link to="/admin" className="admin-link">admin</Link>

                <h1 className="quote" style={quoteStyle}>
                    {quote ? quote.text : "Please add quote(s) in admin view"}
                </h1>
            </div>
        );
    }
}

export default UserView;
