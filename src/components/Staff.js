import React, { Component } from "react";
import Layout from "./Layout";
import _ from "lodash";
import { Card, Grid, Header, Icon, Input, Label } from "semantic-ui-react";
import JSONdata from "../data/StaffData.json";
import { connectContext } from "react-connect-context";
import { Context } from "../context";

class Staff extends Component {
  state = {
    data: JSONdata
  };

  handleTextChange = e => {
    const { value } = e.target;
    this.props.updateSearchQuery(value);
  };

  renderStaff = () => {
    let { data } = this.state;
    let { searchQuery } = this.props;

    searchQuery = searchQuery.toUpperCase();

    if (searchQuery !== "") {
      data = data.filter(Card => {
        const upperCaseProduct = Card.header.toUpperCase();

        if (upperCaseProduct.indexOf(searchQuery) > -1) {
          return Card;
        }
        return null;
      });
    } else {
    }

    return _.map(data, ({ header, image, meta, mail }) => (
      <Grid.Column key={header}>
        <Card
          image={image}
          header={header}
          meta={meta}
          extra={
            <a href={`mailto:${mail}`}>
              <Icon name="mail" />Contact
            </a>
          }
        />
      </Grid.Column>
    ));
  };

  render() {
    const { searchQuery } = this.props;
    return (
      <Layout {...this.props}>
        <Header as="h2">Staff</Header>
        <Input
          value={searchQuery}
          onChange={this.handleTextChange}
          size="small"
          icon="search"
          placeholder="Search staff..."
        />{" "}
        {searchQuery !== "" ? (
          <Label color="teal" size="large">
            Filter: {searchQuery}
          </Label>
        ) : null}
        <br />
        <br />
        <Grid columns={4} stackable>
          {this.renderStaff()}
        </Grid>
      </Layout>
    );
  }
}

export default connectContext(Context.Consumer)(Staff);
