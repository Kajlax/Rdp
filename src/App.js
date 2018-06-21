import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Menu />
            <br />
            <div className="ui container">
              <h2>Rapid Development Platform</h2>
            </div>
          <Footer />
        </div>
    );
  }
}

export default App;
