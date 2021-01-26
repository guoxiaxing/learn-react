import React, { Component } from "react";
import { List, Button } from "antd";
import { Route } from "react-router-dom";

import MyNavlink from "../../MyNavLink";
import Detail from "./Detail";

export default class Message extends Component {
  // 编程式路由
  push = id => {
    // 路由跳转携带path参数
    // this.props.history.push(`/home/message/${id}`);
    // 路由跳转携带search参数
    // this.props.history.push(`/home/message?id=${id}`);
    // 路由跳转携带state参数
    // 使用state时 第一个参数是路径 第二个参数接受一个对象 就是我们的state对象
    this.props.history.push(`/home/message`, { id });
  };
  replace = id => {
    this.props.history.replace(`/home/message/${id}`);
  };

  forward = () => {
    this.props.history.goForward();
    // this.props.history.go(1);
  };

  back = () => {
    this.props.history.goBack();
    // this.props.history.go(-1);
  };
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
              <Button size="small" onClick={() => this.push(index + 1)}>
                push 查看
              </Button>
              <Button size="small" onClick={() => this.replace(index + 1)}>
                replace 查看
              </Button>
              <Button size="small" onClick={this.forward}>
                前进
              </Button>
              <Button size="small" onClick={this.back}>
                后退
              </Button>
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
