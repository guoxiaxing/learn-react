import React, { Component } from "react";
import { Modal } from "antd";

import "antd/dist/antd.css";
import Header from "../Header";
import List2 from "../List";
const { confirm } = Modal;

class TodoList extends Component {
  // 状态在哪里 操作状态的方法就在哪里
  constructor(props) {
    super(props);
    this.getInputValue = this.getInputValue.bind(this);
    this.state = {
      todos: [
        { id: 1, text: "吃饭", done: true },
        { id: 2, text: "学习", done: false },
        { id: 3, text: "健身", done: false },
        { id: 4, text: "买水果", done: false }
      ]
    };
  }
  getInputValue(value) {
    const { todos } = this.state;
    this.setState({
      todos: [{ id: todos.length + 1, text: value, done: false }, ...todos]
    });
  }
  updateTodo = (id, done) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done };
      }
      return todo;
    });
    this.setState({
      todos
    });
  };
  clearDone = () => {
    confirm({
      content: "确定清除已完成的任务？",
      onOk: () => {
        const { todos } = this.state;
        const newTodos = todos.filter(todo => !todo.done);
        this.setState({
          todos: newTodos
        });
      }
    });
  };
  deleteTodo = id => {
    confirm({
      content: "确认删除吗？",
      onOk: () => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        this.setState({
          todos
        });
      }
    });
  };
  checkAll = isCheckAll => {
    const { todos } = this.state;
    const newTodos = todos.map(todo => ({ ...todo, done: isCheckAll }));
    this.setState({
      todos: newTodos
    });
  };
  render() {
    return (
      <div style={{ margin: "10px 0 0 10px" }}>
        <Header getInputValue={this.getInputValue} />
        <List2
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          checkAll={this.checkAll}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default TodoList;
