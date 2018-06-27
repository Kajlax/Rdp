import React from "react";
import { Header, Segment } from "semantic-ui-react";

const segmentStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  height: 80,
  width: "100%",
  borderRadius: 0
};

export default class Footer extends React.PureComponent {
  render() {
    return (
      <Segment inverted style={segmentStyle}>
        <div className="ui center aligned container">
          <Header as="h5" inverted>
            &copy; Rapid Development Platform, 2018.
          </Header>
          <a href="https://www.facebook.com/">
            <i className="facebook square icon big" />
          </a>
          <a href="https://twitter.com/">
            <i className="twitter square icon big" />
          </a>
        </div>
      </Segment>
    );
  }
}
