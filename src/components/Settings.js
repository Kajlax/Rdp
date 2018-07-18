import React from "react";
import Layout from "./Layout";
import { Dropdown, Header } from "semantic-ui-react";

export default class Settings extends React.PureComponent {
  render() {
    const languageOptions = [
      {
        text: "English",
        value: "us",
        flag: "us"
      },
      {
        text: "Finnish",
        value: "fi",
        flag: "fi"
      }
    ];

    return (
      <Layout {...this.props}>
        <Header as="h2">Settings</Header>
        <Header as="h4" dividing>
          Language settings
        </Header>
        <Dropdown placeholder="English" selection options={languageOptions} />
      </Layout>
    );
  }
}
