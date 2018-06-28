import React from "react";
import Layout from "./Layout";
import { Card, Grid, Header, Icon, Input } from "semantic-ui-react";
import JSONdata from "../data/StaffData.json";

export default class Staff extends React.PureComponent {
  renderStaffArray = () => {
    return JSONdata.map(item => {
      return (
        <Grid.Column key={item.header}>
          <Card
            image={item.image}
            header={item.header}
            meta={item.meta}
            extra={
              <a href="mailto:">
                <Icon name="mail" />Contact
              </a>
            }
          />
        </Grid.Column>
      );
    });
  };

  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Staff</Header>
        <Input size="small" icon="search" placeholder="Search staff..." />
        <br />
        <br />
        <Grid columns={4} stackable>
          {this.renderStaffArray()}
        </Grid>
      </Layout>
    );
  }
}
