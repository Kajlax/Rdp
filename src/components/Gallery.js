import React from "react";
import Layout from "./Layout";
import { Grid, Image, Header } from "semantic-ui-react";
import JSONdata from "../data/GalleryData.json";

export default class Gallery extends React.PureComponent {
  renderGalleryArray = () => {
    return JSONdata.map(item => {
      return (
        <Grid.Column key={item.imageUrl}>
          <Image rounded src={item.imageUrl} />
        </Grid.Column>
      );
    });
  };

  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Gallery</Header>
        <Grid columns={4} stackable>
          {this.renderGalleryArray()}
        </Grid>
      </Layout>
    );
  }
}
