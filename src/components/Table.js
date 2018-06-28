import React, { Component } from "react";
import Layout from "./Layout";
import _ from "lodash";
import { Header, Input, Table } from "semantic-ui-react";
import JSONdata from "../data/TableData.json";

let totalRows = Object.keys(JSONdata).length;

export default class TableSortable extends Component {
  state = {
    column: null,
    data: JSONdata,
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
      <Layout {...this.props}>
        <Header as="h2">Table with JSON data</Header>
        <Input size="small" icon="search" placeholder="Search products..." />
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
                Price (€)
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
            <Table.Row>
              <Table.HeaderCell>
                Showing X of total {totalRows} products
              </Table.HeaderCell>
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Layout>
    );
  }
}
