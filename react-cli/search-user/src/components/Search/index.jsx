import React, { Component } from "react";
import { Input, Button } from "antd";
import axios from "axios";
import PubSub from "pubsub-js";

import "./index.css";
import { UPDATE_STATE } from "../../eventType";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ""
    };
  }
  searchUser = userName => {
    PubSub.publish(UPDATE_STATE, {
      isFirst: false,
      isLoading: true
    });
    axios
      .get(`https://api.github.com/search/users?q=${userName}`)
      .then(({ data }) => {
        PubSub.publish(UPDATE_STATE, {
          users: data.items,
          isLoading: false
        });
      })
      .catch(e => {
        PubSub.publish(UPDATE_STATE, {
          isLoading: false,
          error: e.message
        });
      });
  };
  search = () => {
    const value = this.state.inputValue.trim();
    if (value) {
      this.searchUser(this.state.inputValue);
      this.setState({
        inputValue: ""
      });
    }
  };
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }
  render() {
    return (
      <div className="search">
        <label htmlFor="insertInput">请输入:</label>
        <Input
          id="insertInput"
          placeholder="Search Github User"
          value={this.state.inputValue}
          onChange={this.handleChange}
          style={{ width: "300px", marginLeft: "10px" }}
        />
        <Button
          type="primary"
          onClick={this.search}
          style={{ marginLeft: "20px" }}
        >
          Search
        </Button>
      </div>
    );
  }
}
