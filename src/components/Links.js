import React, { PureComponent } from "react";
import Layout from "./Layout";
import { Grid, Header, List } from "semantic-ui-react";

class Links extends PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <div>
          <Header as="h2">Links</Header>
          <Grid columns={3} stackable>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4" dividing>
                  Tools
                </Header>
                <List>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 1</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 2</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 3</a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" dividing>
                  Products
                </Header>
                <List>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 4</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 5</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 6</a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" dividing>
                  Support
                </Header>
                <List>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 7</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 8</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 9</a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as="h4" dividing>
                  Websites
                </Header>
                <List>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 10</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 11</a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="caret right" />
                    <List.Content>
                      <a href="https://www.google.com">Link 12</a>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default Links;
