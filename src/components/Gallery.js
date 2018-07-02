import React, { Component } from "react";
import Layout from "./Layout";
import { Dimmer, Grid, Image, Header } from "semantic-ui-react";
import JSONdata from "../data/GalleryData.json";

export default class Gallery extends Component {
  state = {};

  renderGalleryArray = () => {
    return JSONdata.map(item => {
      return (
        <Grid.Column key={item.id}>
          <Image rounded src={item.imageUrl} onClick={this.handleOpen} />
        </Grid.Column>
      );
    });
  };

  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });

  showImage = () => {
    const { active } = this.state;
    return (
      <Dimmer active={active} onClickOutside={this.handleClose} page>
        <Image rounded src={this.imageUrl} />
        <Header as="h2" inverted>
          {this.id}, {this.imageCategory}
        </Header>
      </Dimmer>
    );
  };

  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Gallery</Header>
        <Header as="h4" dividing>
          Miscellaneous
        </Header>
        <Grid columns={4} stackable>
          {this.renderGalleryArray()}
        </Grid>
      </Layout>
    );
  }
}
