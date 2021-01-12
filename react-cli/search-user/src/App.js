import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import UserCard from "./components/Card";
import "antd/dist/antd.css";
import "./App.css";

export default class App extends Component {
  state = {
    users: [],
    isLoading: false,
    isFirst: true,
    error: ""
  };
  searchUser = userName => {
    this.setState({
      isFirst: false,
      isLoading: true
    });
    axios
      .get(`https://api.github.com/search/users?q=${userName}`)
      .then(({ data }) => {
        this.setState({
          users: data.items,
          isLoading: false
        });
      })
      .catch(e => {
        this.setState({
          isLoading: false,
          error: e.message
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Search searchUser={this.searchUser} />
        <UserCard {...this.state} />
      </div>
    );
  }
}
