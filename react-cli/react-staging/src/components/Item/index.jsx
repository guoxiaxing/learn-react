import React, { Component } from "react";
import { List, Checkbox, Button } from "antd";
import PropTypes from "prop-types";

export default class Item extends Component {
  static propTypes = {
    updateTodoItem: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    this.handleMouse = this.handleMouse.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleMouse(isHover) {
    return () => {
      this.setState({
        isHover
      });
    };
  }

  handleClick(id) {
    return () => {
      this.props.deleteTodo(id);
    };
  }

  handleCheck(id, event) {
    this.props.updateTodoItem(id, event.target.checked);
  }

  render() {
    const { item } = this.props;
    return (
      <List.Item
        // key={item.id}
        /** hover效果 通过 onMouseEnter 和 onMouseLeave 实现*/
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: this.state.isHover ? "#eee" : "white" }}
      >
        {/** defaultChecked 只在第一次起作用 后面当属性或者状态发生改变时它也不会变 所以如果希望复选框是否选中可以动态决定 那么使用 checked*/}
        <Checkbox
          checked={item.done}
          onChange={event => this.handleCheck(item.id, event)}
        >
          {item.text}
        </Checkbox>
        <Button
          type="danger"
          size="small"
          style={{ display: this.state.isHover ? undefined : "none" }}
          onClick={this.handleClick(item.id)}
        >
          删除
        </Button>
      </List.Item>
    );
  }
}
