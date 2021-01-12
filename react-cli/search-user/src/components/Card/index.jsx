import React, { Component } from "react";
import { Card, Spin } from "antd";
import PubSub from "pubsub-js";

import CardItem from "../CardItem";
import { UPDATE_STATE } from "../../eventType";
import "./index.css";

export default class UserCard extends Component {
  state = {
    users: [],
    isLoading: false,
    isFirst: true,
    error: ""
  };
  subId = undefined;
  componentDidMount() {
    this.subId = PubSub.subscribe(UPDATE_STATE, (_, data) => {
      this.setState(data);
    });
  }
  componentWillUnmount() {
    if (this.subId) {
      PubSub.unsubscribe(this.subId);
    }
  }
  render() {
    const { users, isFirst, isLoading, error } = this.state;
    return (
      <div className="card">
        <Card title="User">
          {isFirst ? (
            <h1> 请输入内容，然后点击 Search </h1>
          ) : isLoading ? (
            <Spin />
          ) : error ? (
            <h1 style={{ color: "red" }}>{error}</h1>
          ) : (
            users.map(user => (
              <CardItem
                key={user.id}
                avatarUrl={user.avatar_url}
                name={user.login}
                homeUrl={user.html_url}
              />
            ))
          )}
        </Card>
      </div>
    );
  }
}
