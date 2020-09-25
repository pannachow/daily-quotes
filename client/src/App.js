import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

const API_URL = "http://localhost:3001/quote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(API_URL);
    this.setState({
      quotes: await res.json(),
    });
  }

  async addQuote(quote) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });
    this.setState({
      quotes: [...this.state.quotes, await res.json()],
    });
  }

  async deleteQuote(quote) {
    await fetch(`${API_URL}/${quote.id}`, {
      method: "DELETE",
    })
    this.setState({
      quotes: this.state.quotes.filter(q => q.id !== quote.id),
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminView
              quotes={this.state.quotes}
              addQuote={quote => this.addQuote(quote)}
              deleteQuote={quote => this.deleteQuote(quote)}
            />
          </Route>
          <Route path="/">
            <UserView quotes={this.state.quotes} />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
