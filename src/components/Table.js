import React, { PureComponent } from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

class Table extends PureComponent {
  render() {
    return (
      <Layout>
        <div>
          <Header as="h2">Table from JSON data</Header>
        </div>
      </Layout>
    );
  }
}

export default Table;
