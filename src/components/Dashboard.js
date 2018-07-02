import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Dashboard</Header>
        <Header as="h4" dividing>
          Statistics
        </Header>
      </Layout>
    );
  }
}
