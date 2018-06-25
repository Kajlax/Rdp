import React, { Component } from "react";
import Layout from "./Layout";
import _ from "lodash";
import { Header, Table } from "semantic-ui-react";

const tableData = [
  { id: "1", product: "Product 1", price: 10, category: "Industry" },
  { id: "2", product: "Product 2", price: 80, category: "Industry" },
  { id: "3", product: "Product 3", price: 20, category: "Coal" },
  { id: "4", product: "Product 4", price: 10, category: "Industry" }
];

export default class TableExampleSortable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;
    return (
      <Layout>
        <Header as="h2">Table from JSON data</Header>
        <Table sortable selectable celled fixed compact="very" color="purple">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "id" ? direction : null}
                onClick={this.handleSort("id")}
              >
                Id
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "product" ? direction : null}
                onClick={this.handleSort("product")}
              >
                Product
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "price" ? direction : null}
                onClick={this.handleSort("price")}
              >
                Price
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "category" ? direction : null}
                onClick={this.handleSort("category")}
              >
                Category
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ product, price, id, category }) => (
              <Table.Row key={id}>
                <Table.Cell>{id}</Table.Cell>
                <Table.Cell>{product}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.HeaderCell>Row count?</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Footer>
        </Table>
      </Layout>
    );
  }
}