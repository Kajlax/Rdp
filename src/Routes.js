import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "./components/Links";
import Frontpage from "./components/Frontpage";
import Table from "./components/Table";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route path="/Links" component={Links} exact />
          <Route path="/Table" component={Table} exact />
        </Switch>
      </Router>
    );
  }
}
