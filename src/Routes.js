import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Gallery from "./components/Gallery";
import Links from "./components/Links";
import Staff from "./components/Staff";
import Table from "./components/Table";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route path="/Gallery" component={Gallery} exact />
          <Route path="/Links" component={Links} exact />
          <Route path="/Staff" component={Staff} exact />
          <Route path="/Table" component={Table} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
        </Switch>
      </Router>
    );
  }
}
