import React, { Component } from "react";
import { List } from "antd";
import PropTypes from "prop-types";

import Footer from "../Footer";
import Item from "../Item";

import "./index.css";

export default class List2 extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    checkAll: PropTypes.func.isRequired,
    clearDone: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    this.handleMouse = this.handleMouse.bind(this);
  }
  handleMouse(isHover) {
    return () => {
      this.setState({
        isHover
      });
    };
  }

  render() {
    console.log(this.props.todos);
    return (
      <div className="list">
        <List
          footer={
            <Footer
              doneCount={this.props.todos.filter(todo => todo.done).length}
              totalCount={this.props.todos.length}
              checkAll={this.props.checkAll}
              clearDone={this.props.clearDone}
            />
          }
          bordered
          dataSource={this.props.todos}
          renderItem={item => (
            /** 注意 要加上key 否则会出现元素复用而导致 checkbox 的默认选中会有问题 */
            <Item
              item={item}
              key={item.id}
              updateTodoItem={this.props.updateTodo}
              deleteTodo={this.props.deleteTodo}
            />
          )}
        />
      </div>
    );
  }
}
