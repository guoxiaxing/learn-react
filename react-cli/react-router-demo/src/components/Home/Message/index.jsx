import React, { Component } from "react";
import { List } from "antd";

export default class Message extends Component {
  render() {
    return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={["message1", "message2", "message3"]}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    );
  }
}
