import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "./components/Links";
import App from "./App";

export default class Routes extends React.PureComponent {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/Links" component={Links} exact />
        </Switch>
      </Router>
    );
  }
} 