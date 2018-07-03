import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

export default class About extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">About</Header>
        <Header as="h4" dividing>
          About the platform
        </Header>
        <br />
        Rapid development Platform is developed with React and Semantic UI.
        <br />
        <br />
        Created by Katajisto and Laxström.
      </Layout>
    );
  }
}
