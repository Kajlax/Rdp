import React from "react";
import Layout from "./Layout";
import { Header, Item } from "semantic-ui-react";
import image from "../data/images/image.png";

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
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={image} />
            <Item.Content>
              <Item.Header as="a">JSON</Item.Header>
              <Item.Meta>
                All user data is stored in easy-to-update JSON-files
              </Item.Meta>
              <Item.Extra>Read more</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="tiny" src={image} />
            <Item.Content>
              <Item.Header as="a">jQuery free</Item.Header>
              <Item.Meta>The platform doesn't use jQuery</Item.Meta>
              <Item.Extra>Read more</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="tiny" src={image} />
            <Item.Content>
              <Item.Header as="a">Component based</Item.Header>
              <Item.Meta>Easy to modify and implement components</Item.Meta>
              <Item.Extra>Read more</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Layout>
    );
  }
}
