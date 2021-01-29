import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  add = () => {
    // 1. 对象式 setState
    // 同步的方法 但是react会异步去更新state 所以无法在setState之后同步的获取最新的state 但是可以通过setState的第二个参数（函数）来获取
    // 最新的state的值 该函数会在页面重新render之后 state的值更新之后自动调用
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("object setState", this.state.count);
    //   }
    // );

    // 函数式 setState 如果新状态依赖于原状态 那么使用函数式
    // 对象式 setState 是函数式 setState 的一个语法糖（简写方式）

    this.setState(
      (state, props) => {
        console.log(state, props);
        return { count: state.count + 1 };
      },
      () => {
        console.log("func setState", this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
