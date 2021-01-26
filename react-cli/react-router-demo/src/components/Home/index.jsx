import React, { Component } from "react";
import { Breadcrumb } from "antd";
import MyNavLink from "../MyNavLink";
import { Switch, Route, Redirect } from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <MyNavLink path="/home/news" className="my-active">
              News
            </MyNavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {/* 路由默认是push模式 可以给Link标签加上replace属性来开启replace模式 */}
            <MyNavLink
              replace={true}
              path="/home/message"
              className="my-active"
            >
              Message
            </MyNavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </>
    );
  }
}
