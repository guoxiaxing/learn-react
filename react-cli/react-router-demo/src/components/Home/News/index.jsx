import React, { Component } from "react";
import { List } from "antd";

export default class News extends Component {
  render() {
    return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={["news1", "news2", "news3"]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    );
  }
}
