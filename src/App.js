import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Links from "./components/Links";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <br />
        <div className="ui container">
          <h2>Rapid Development Platform</h2>
          <Router>
            <div>
              <Route path="/Links" component={Links} exact />
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
