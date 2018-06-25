import React, { Component } from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuAttached extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu attached="top" color="teal" inverted stackable>
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
        <Menu.Item
          name="Frontpage"
          active={activeItem === "Frontpage"}
          onClick={this.handleItemClick}
        >
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item
          name="Links"
          active={activeItem === "Links"}
          onClick={this.handleItemClick}
        >
          <Link to="/Links">Links</Link>
        </Menu.Item>

        <Menu.Item
          name="Table"
          active={activeItem === "Table"}
          onClick={this.handleItemClick}
        >
          <Link to="/Table">Table</Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search..." />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>
    );
  }
}
