import React, { Component } from "react";
import { Card } from "antd";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

export default class CardItem extends Component {
  render() {
    return (
      <Card.Grid style={gridStyle}>
        <a href={this.props.homeUrl}>
          <img alt="user-avatar" src={this.props.avatarUrl} />
        </a>
        <p>{this.props.name}</p>
      </Card.Grid>
    );
  }
}
