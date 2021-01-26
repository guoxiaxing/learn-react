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
              {/* 路由组件携带参数 1 path参数 路由链接携带参数 参数会暴露在地址栏中 所以刷新浏览器仍然可以生效 */}
              {/* <MyNavlink path={"/home/message/" + (index + 1)}>
                {item}
              </MyNavlink> */}
              {/* 传递 query/search 参数 参数会暴露在地址栏中 所以刷新浏览器仍然可以生效 */}
              {/* <MyNavlink path={"/home/message?id=" + (index + 1)}>
                {item}
              </MyNavlink> */}
              {/* 传递 state 参数 和组件的state属性没有任何关系 参数不会暴露在地址栏中 但是刷新浏览器仍然可以生效 不会丢掉state*/}
              {/* 原因是因为 我们使用的是 BrowserRouter 所以它一直会维护一个history对象 所以我们存的值都一直会被保留 */}
              {/* 此时 Link 标签的 to 属性不再是一个字符串 而需要传递一个对象 */}
              <MyNavlink
                path={{ pathname: "/home/message", state: { id: index + 1 } }}
              >
                {item}
              </MyNavlink>
            </List.Item>
          )}
        />
        {/* 路由组件携带参数 1 path参数  声明接收*/}
        {/* <Route path="/home/message/:id" component={Detail} /> */}

        {/*  声明接收 search 参数 search 参数无须声明接收*/}
        {/* <Route path="/home/message" component={Detail} /> */}

        {/*  声明接收 state 参数 state 参数无须声明接收*/}
        <Route path="/home/message" component={Detail} />
      </>
    );
  }
}
