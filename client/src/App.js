import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

function fetchApi(url, options) {
  return fetch(BASE_URL + url, options);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  async componentDidMount() {
    const res = await fetchApi("/quote");
    this.setState({
      quotes: await res.json(),
    });
  }

  async addQuote(quote) {
    const res = await fetchApi("/quote", {
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
    await fetchApi(`/quote/${quote.id}`, {
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
            <div style={{paddingLeft: "50px"}}>
            <AdminView
              quotes={this.state.quotes}
              addQuote={quote => this.addQuote(quote)}
              deleteQuote={quote => this.deleteQuote(quote)}
            />
            </div>
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
