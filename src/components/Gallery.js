import React, { Component } from "react";
import Layout from "./Layout";
import { Dimmer, Grid, Image, Header } from "semantic-ui-react";
import JSONdata from "../data/GalleryData.json";

export default class Gallery extends Component {
  state = {
    selectedImage: null,
  };

  renderGalleryArray = () => {
    return JSONdata.map(item => {
      return (
        <Grid.Column key={item.id}>
          <Image rounded src={item.imageUrl} onClick={() => this.handleOpen(item)} />
        </Grid.Column>
      );
    });
  };

  handleOpen = (image) => this.setState({ selectedImage: image });
  handleClose = () => this.setState({ selectedImage: null });

  showImage = () => {
    const { selectedImage } = this.state;
    return (
      <Dimmer active={selectedImage ? true : false} onClickOutside={this.handleClose} page>
        <Image rounded src={selectedImage.imageUrl} />
        <Header as="h2" inverted>
          {selectedImage.id}, {selectedImage.imageCategory}
        </Header>
      </Dimmer>
    );
  };

  render() {
    const { selectedImage } = this.state;
    return (
      <Layout {...this.props}>
        <Header as="h2">Gallery</Header>
        <Header as="h4" dividing>
          Miscellaneous
        </Header>
        <Grid columns={4} stackable>
          {this.renderGalleryArray()}
        </Grid>
        { 
          selectedImage ? 
          this.showImage()
          :
          null
        }
      </Layout>
    );
  }
}
