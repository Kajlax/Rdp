import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

export default class Frontpage extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Rapid Development Platform</Header>
        <Header as="h4" block color="purple">
          Rapid Development Platform is a new component-based modular web
          platform. The platform can be modified and expanded with different
          components. Data sources come from external JSON files that can be
          updated separately.
        </Header>
      </Layout>
    );
  }
}
