import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Gallery from "./components/Gallery";
import Links from "./components/Links";
import Staff from "./components/Staff";
import Table from "./components/Table";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

export const routes = [
  {
    Title: "Home",
    Path: "/",
    component: Frontpage,
    showInNavItems: true,
    showInNavDropdown: false
  },
  {
    Title: "Gallery",
    Path: "/gallery",
    component: Gallery,
    showInNavItems: true,
    showInNavDropdown: false
  },
  {
    Title: "Links",
    Path: "/links",
    component: Links,
    showInNavItems: true,
    showInNavDropdown: false
  },
  {
    Title: "Staff",
    Path: "/staff",
    component: Staff,
    showInNavItems: true,
    showInNavDropdown: false
  },
  {
    Title: "Table",
    Path: "/table",
    component: Table,
    showInNavItems: true,
    showInNavDropdown: false
  },
  {
    Title: "About",
    Path: "/about",
    component: About,
    showInNavItems: false,
    showInNavDropdown: true
  },
  {
    Title: "Dashboard",
    Path: "/dashboard",
    component: Dashboard,
    showInNavItems: false,
    showInNavDropdown: true
  },
  {
    Title: "Settings",
    Path: "/settings",
    component: Settings,
    showInNavItems: false,
    showInNavDropdown: true
  }
];

class Routes extends React.PureComponent {
  renderRoutes = () => {
    return routes.map(route => {
      return (
        <Route
          key={route.Path}
          path={route.Path}
          component={route.component}
          exact
        />
      );
    });
  };

  render() {
    return (
      <Router>
        <Switch>{this.renderRoutes()}</Switch>
      </Router>
    );
  }
}

export default Routes;
