import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";

const segmentStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  borderRadius: 0
};

class Footer extends React.PureComponent {
  render() {
    return (
      <Segment inverted style={segmentStyle}>
        <div className="ui center aligned container">
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h5" inverted>
                  Rapid Development Platform, 2018
                  <br /> info@rdp.fi
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Icon link name="facebook square" size="large" />
                <Icon link name="instagram" size="large" />
                <Icon link name="twitter" size="large" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Segment>
    );
  }
}

export default Footer;
