import React from "react";
import Layout from "./Layout";
import { Header, List, Segment } from "semantic-ui-react";

export default class Frontpage extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Rapid Development Platform</Header>
        <Header as="h4" dividing>
          Info
        </Header>
        Rapid Development Platform is a new component-based modular web
        platform. The platform can be modified and expanded with different
        components. Data sources come from external JSON files that can be
        updated separately.
        <Segment inverted compact color="purple">
          <List divided inverted relaxed>
            <List.Item>
              <List.Content>
                <List.Header>JSON</List.Header>
                All user data is stored in easy-to-update JSON-files
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>jQuery Free</List.Header>
                The platform doesn't use jQuery
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Component based</List.Header>
                Easy to modify and implement components
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Layout>
    );
  }
}
