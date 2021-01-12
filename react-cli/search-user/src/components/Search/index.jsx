import React, { Component } from "react";
import { Input, Button } from "antd";
// import axios from "axios";
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
    // 使用axios
    // axios
    //   .get(`https://api.github.com/search/users?q=${userName}`)
    //   .then(({ data }) => {
    //     PubSub.publish(UPDATE_STATE, {
    //       users: data.items,
    //       isLoading: false
    //     });
    //   })
    //   .catch(e => {
    //     PubSub.publish(UPDATE_STATE, {
    //       isLoading: false,
    //       error: e.message
    //     });
    //   });

    // 使用fetch
    // 请求发送成功 但是服务器响应错误时 仍然会返回resolve的状态 此时需要通过 状态码来判断
    fetch(`https://api.github.com/search/users1?q=${userName}`)
      .then(data => {
        // data 是一个 Response 对象
        // 调用 Response 的 json 方法返回一个 Promise
        if (data.ok) {
          return data.json(data);
        } else {
          // 传入的值默认作为 错误对象的 message 属性
          throw new Error(data.statusText);
        }
      })
      .then(data => {
        // 得到响应内容
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
