import React, { Component } from "react";
import { List } from "antd";
import { Route } from "react-router-dom";

import MyNavlink from "../../MyNavLink";
import Detail from "./Detail";

export default class Message extends Component {
  render() {
    return (
      <>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={["message1", "message2", "message3"]}
          renderItem={(item, index) => (
            <List.Item>
              {/* 路由组件携带参数 1 path参数 路由链接携带参数 */}
              <MyNavlink path={"/home/message/" + (index + 1)}>
                {item}
              </MyNavlink>
            </List.Item>
          )}
        />
        {/* 路由组件携带参数 1 path参数  声明接收*/}
        <Route path="/home/message/:id" component={Detail} />
      </>
    );
  }
}
