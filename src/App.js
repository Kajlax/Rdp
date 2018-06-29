import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Routes from "./Routes";
import { Context } from './context';

class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      searchQuery: '',
      updateSearchQuery: this.updateSearchQuery
    };
  }

  updateSearchQuery = (searchQuery) => {
    this.setState({
      searchQuery,
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Routes />
      </Context.Provider>
    );
  }
}

export default App;
