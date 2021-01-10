import React, { Component } from "react";
import { Checkbox, Button } from "antd";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    checkAll: PropTypes.func.isRequired,
    clearDone: PropTypes.func.isRequired
  };
  handleChange = event => {
    this.props.checkAll(event.target.checked);
  };
  clearDone = () => {
    this.props.clearDone();
  };
  render() {
    return (
      <div>
        <Checkbox
          onChange={this.handleChange}
          checked={
            this.props.totalCount &&
            this.props.doneCount === this.props.totalCount
              ? true
              : false
          }
        >
          已完成 {this.props.doneCount} / 全部 {this.props.totalCount}
        </Checkbox>
        <Button type="danger" size="small" onClick={this.clearDone}>
          清除已完成任务
        </Button>
      </div>
    );
  }
}
