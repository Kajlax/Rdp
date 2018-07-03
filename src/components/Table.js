import React, { Component } from "react";
import Layout from "./Layout";
import _ from "lodash";
import { Header, Input, Label, Table } from "semantic-ui-react";
import JSONdata from "../data/TableData.json";
import { connectContext } from "react-connect-context";
import { Context } from "../context";

const totalRows = JSONdata.length;
let filteredRows = totalRows;

class TableSortable extends Component {
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

  handleTextChange = e => {
    const { value } = e.target;
    this.props.updateSearchQuery(value);
  };

  renderRows = () => {
    let { data } = this.state;
    let { searchQuery } = this.props;

    searchQuery = searchQuery.toUpperCase();

    if (searchQuery !== "") {
      data = data.filter(row => {
        const upperCaseProduct = row.product.toUpperCase();
        const upperCaseCategory = row.category.toUpperCase();

        if (
          upperCaseProduct.indexOf(searchQuery) > -1 ||
          upperCaseCategory.indexOf(searchQuery) > -1
        ) {
          return row;
        }
        return null;
      });

      filteredRows = data.length;
    } else {
      filteredRows = totalRows;
    }

    return _.map(data, ({ product, price, id, category }) => (
      <Table.Row key={id}>
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{product}</Table.Cell>
        <Table.Cell>{price}</Table.Cell>
        <Table.Cell>{category}</Table.Cell>
      </Table.Row>
    ));
  };

  render() {
    const { column, direction } = this.state;
    const { searchQuery } = this.props;

    return (
      <Layout {...this.props}>
        <Header as="h2">Table</Header>
        <Input
          value={searchQuery}
          onChange={this.handleTextChange}
          size="small"
          icon="search"
          placeholder="Search products..."
        />{" "}
        {searchQuery !== "" ? (
          <Label color="teal" size="large">
            Filter: {searchQuery}
          </Label>
        ) : null}
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
          <Table.Body>{this.renderRows()}</Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>
                Showing {filteredRows} of total {totalRows} products
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

export default connectContext(Context.Consumer)(TableSortable);
