import React, { Component } from "react";
import { Dropdown, Icon, Menu as SemanticMenu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const menuitems = [
  {
    Title: "Home",
    Path: "/"
  },
  {
    Title: "Links",
    Path: "/Links"
  },
  {
    Title: "Table",
    Path: "/Table"
  }
];

export default class Menu extends Component {
  state = {};

  renderMainItems = () => {
    return menuitems.map(item => {
      const { path } = this.props.match;

      return (
        <SemanticMenu.Item
          key={item.Title}
          as={Link}
          name={item.Title}
          active={path === item.Path}
          to={item.Path}
        />
      );
    });
  };
  render() {
    return (
      <SemanticMenu attached="top" color="teal" inverted stackable>
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">Item 1</span>
              <Dropdown.Menu>
                <Dropdown.Item>Item 1.1</Dropdown.Item>
                <Dropdown.Item>Item 1.2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {this.renderMainItems()}
        <SemanticMenu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search..." />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </SemanticMenu.Menu>
      </SemanticMenu>
    );
  }
}
