import React from "react";
import Layout from "./Layout";
import { Card, Grid, Header, Icon, Input } from "semantic-ui-react";

const staffArray = [
  {
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",
    header: "Sam Smith",
    meta: "Chief Executive officer",
    extra: "<a href='mailto:'><Icon name='mail' />Contact</a>"
  },
  {
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",
    header: "Jane Doe",
    meta: "Head of Marketing",
    extra: "<a href='mailto:'><Icon name='mail' />Contact</a>"
  },
  {
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",
    header: "Steve King",
    meta: "Head of Sales",
    extra: "<a href='mailto:'><Icon name='mail' />Contact</a>"
  },
  {
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",
    header: "John Doe",
    meta: "Head of Production",
    extra: "<a href='mailto:'><Icon name='mail' />Contact</a>"
  },
  {
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png",
    header: "Eric Johnson",
    meta: "Head of IT",
    extra: "<a href='mailto:'><Icon name='mail' />Contact</a>"
  }
];

export default class Staff extends React.PureComponent {
  renderStaffArray = () => {
    return staffArray.map(item => {
      return (
        <Grid.Column>
          <Card
            image={item.image}
            header={item.header}
            meta={item.meta}
            extra={item.extra}
          />
        </Grid.Column>
      );
    });
  };

  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2">Staff</Header>
        <Input size="small" icon="search" placeholder="Search staff..." />
        <br />
        <br />
        <Grid columns={4} stackable>
          {this.renderStaffArray()}
        </Grid>
      </Layout>
    );
  }
}
