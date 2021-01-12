import React, { Component } from "react";
import { Card, Spin } from "antd";
import CardItem from "../CardItem";
import "./index.css";

export default class UserCard extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;
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
