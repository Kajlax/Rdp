import React from "react";
import Layout from "./Layout";
import { Grid, Header, List } from "semantic-ui-react";
import JSONdata from "../data/LinksData.json";

export default class Links extends React.PureComponent {
  renderLinksArrayTools = () => {
    return JSONdata.filter(item => item.linkCategory === "Tools").map(item => {
      return (
        <List.Item key={item.linkName}>
          <List.Icon name="caret right" />
          <List.Content>
            <a href={item.linkUrl}>{item.linkName}</a>
          </List.Content>
        </List.Item>
      );
    });
  };

  renderLinksArrayProducts = () => {
    return JSONdata.filter(item => item.linkCategory === "Products").map(
      item => {
        return (
          <List.Item key={item.linkName}>
            <List.Icon name="caret right" />
            <List.Content>
              <a href={item.linkUrl}>{item.linkName}</a>
            </List.Content>
          </List.Item>
        );
      }
    );
  };

  renderLinksArraySupport = () => {
    return JSONdata.filter(item => item.linkCategory === "Support").map(
      item => {
        return (
          <List.Item key={item.linkName}>
            <List.Icon name="caret right" />
            <List.Content>
              <a href={item.linkUrl}>{item.linkName}</a>
            </List.Content>
          </List.Item>
        );
      }
    );
  };

  renderLinksArrayWebsites = () => {
    return JSONdata.filter(item => item.linkCategory === "Websites").map(
      item => {
        return (
          <List.Item key={item.linkName}>
            <List.Icon name="caret right" />
            <List.Content>
              <a href={item.linkUrl}>{item.linkName}</a>
            </List.Content>
          </List.Item>
        );
      }
    );
  };

  render() {
    return (
      <Layout {...this.props}>
        <div>
          <Header as="h2">Links</Header>
          <Grid columns={3} stackable>
            <Grid.Column>
              <Header as="h4" dividing>
                Tools
              </Header>
              <List>{this.renderLinksArrayTools()}</List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" dividing>
                Products
              </Header>
              <List>{this.renderLinksArrayProducts()}</List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" dividing>
                Support
              </Header>
              <List>{this.renderLinksArraySupport()}</List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" dividing>
                Webistes
              </Header>
              <List>{this.renderLinksArrayWebsites()}</List>
            </Grid.Column>
          </Grid>
        </div>
      </Layout>
    );
  }
}
