import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

export default class Frontpage extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Rapid Development Platform</Header>
        <Header as="h4" block color="purple">
          Rapid Development Platform uses a new component-based web design. The
          platform can be modified and expanded with different components.
        </Header>
      </Layout>
    );
  }
}
