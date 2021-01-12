import React, { Component } from "react";
import { Input, Button } from "antd";
import "./index.css";
import PropTypes from "prop-types";

export default class Search extends Component {
  static propTypes = {
    searchUser: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ""
    };
  }
  search = () => {
    const value = this.state.inputValue.trim();
    if (value) {
      this.props.searchUser(this.state.inputValue);
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
