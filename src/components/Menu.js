import React, { PureComponent } from "react";
import { Dropdown, Menu as SemanticMenu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connectContext } from "react-connect-context";
import { routes } from "../Routes";
import { Context } from "../context";

class Menu extends PureComponent {
  state = {};

  handleTextChange = e => {
    const { value } = e.target;
    this.props.updateSearchQuery(value);
  };

  renderNavItems = () => {
    return routes.map(item => {
      const { path } = this.props.match;
      if (item.showInNavItems) {
        return (
          <SemanticMenu.Item
            key={item.Title}
            as={Link}
            name={item.Title}
            active={path === item.Path}
            to={item.Path}
          />
        );
      }
      return null;
    });
  };

  renderDropdownItems = () => {
    return routes.map(item => {
      const { path } = this.props.match;
      if (item.showInNavDropdown) {
        return (
          <Dropdown.Item
            key={item.Title}
            as={Link}
            active={path === item.Path}
            to={item.Path}
          >
            {item.Title}
          </Dropdown.Item>
        );
      }
      return null;
    });
  };

  render() {
    const { searchQuery } = this.props;

    return (
      <SemanticMenu fixed="top" color="teal" inverted unstackable="true">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>{this.renderDropdownItems()}</Dropdown.Menu>
        </Dropdown>
        {this.renderNavItems()}
        <SemanticMenu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui icon input">
              <input
                value={searchQuery}
                onChange={this.handleTextChange}
                className="prompt"
                type="text"
                placeholder="Search..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </SemanticMenu.Menu>
      </SemanticMenu>
    );
  }
}

export default connectContext(Context.Consumer)(Menu);
