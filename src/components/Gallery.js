import React from "react";
import Layout from "./Layout";
import { Grid, Image, Header } from "semantic-ui-react";

const galleryArray = [
  {
    image: "https://picsum.photos/200/200/?random"
  },
  {
    image: "https://picsum.photos/200/200/?random"
  },
  {
    image: "https://picsum.photos/200/200/?random"
  },
  {
    image: "https://picsum.photos/200/200/?random"
  },
  {
    image: "https://picsum.photos/200/200/?random"
  }
];

export default class Gallery extends React.PureComponent {
  renderGalleryArray = () => {
    return galleryArray.map(item => {
      return (
        <Grid.Column>
          <Image src={item.image} />
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
