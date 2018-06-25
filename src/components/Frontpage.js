import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

export default class Frontpage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Header as="h2">Rapid Development Platform</Header>
        <Header as="h3">Home</Header>
      </Layout>
    );
  }
}
