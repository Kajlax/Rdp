import React from "react";
import Layout from "./Layout";
import _ from "lodash";
import { Grid, Header, List } from "semantic-ui-react";
import JSONdata from "../data/LinksData.json";

const categories = _.uniqBy(JSONdata, 'linkCategory');

export default class Links extends React.PureComponent {
  renderLinksArray = (section) => {
    return JSONdata.filter(item => item.linkCategory === section).map(item => {
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
  renderColumns = () => {
    return categories.map(col => {
      return (
        <Grid.Column key={col.linkCategory}>
          <Header as="h4" dividing>
            {col.linkCategory}
          </Header>
          <List>{this.renderLinksArray(col.linkCategory)}</List>
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <Layout {...this.props}>
        <div>
          <Header as="h2">Links</Header>
          <Grid columns={3} stackable>
            {
              this.renderColumns()
            }
          </Grid>
        </div>
      </Layout>
    );
  }
}
