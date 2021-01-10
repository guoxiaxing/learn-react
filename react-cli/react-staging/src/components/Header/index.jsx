import React, { Component } from "react";
import { Input, Button } from "antd";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    getInputValue: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ""
    };
  }
  handleInput() {
    if (this.state.inputValue.trim()) {
      this.props.getInputValue(this.state.inputValue);
      this.setState({
        inputValue: ""
      });
    }
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }
  render() {
    return (
      <div>
        <label htmlFor="insertInput">请输入:</label>
        <Input
          id="insertInput"
          placeholder="Todo List"
          value={this.state.inputValue}
          onChange={this.handleChange}
          style={{ width: "300px", marginLeft: "10px" }}
          ref={input => (this.input = input)}
        />
        <Button
          type="primary"
          onClick={this.handleInput}
          style={{ marginLeft: "20px" }}
        >
          提交
        </Button>
      </div>
    );
  }
}
