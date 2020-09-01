import React from "react";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          id: "1",
          text: "Do Not Let Yesterday Take Up Too Much Of Today.",
          color: "white",
          backgroundColor: "#81D8D0",
        },
        {
          id: "2",
          text: "The purpose of art is washing the dust of daily life off our souls.",
          color: "orange",
          backgroundColor: "yellow"
        },
        {
          id: "3",
          text: "If You Are Working On Something That You Really Care About, You Do Not Have To Be Pushed. The Vision Pulls You.",
          color: "darkblue",
          backgroundColor: "lightblue"
        }
      ]
    };
  }

  async componentWillMount() {
    // TODO
  }

  addQuote(quote) {
    this.setState({
      quotes: [...this.state.quotes, quote]
    });
  }

  deleteQuote(quote) {
    this.setState({
      quotes: this.state.quotes.filter(q => q.id !== quote.id)
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
