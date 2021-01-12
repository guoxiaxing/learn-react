import React, { Component } from "react";
import Search from "./components/Search";
import UserCard from "./components/Card";
import "antd/dist/antd.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <UserCard />
      </div>
    );
  }
}
