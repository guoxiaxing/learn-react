import React, { Component } from "react";
import Child from "./Child";

// 错误边界需要在容易出错的组件的父组件中做一些手脚
// 错误边界只能捕获生命周期钩子中的报错（包括render）不能捕获自己组件产生的错误或者其他组件在合成事件 定时器中产生的错误
export default class Parent extends Component {
  state = { hasError: false };

  // Parent 组件的子组件出现了任何的报错 都会调用该钩子
  // 错误边界只适用于生产环境 开发环境是不适用的 报错还是会展示在页面上(开发环境)
  static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发 返回新的state
    return { hasError: error };
  }
  componentDidCatch(error, info) {
    // 出错时调用
    // 用来打印日志
    console.log(error, info);
  }

  render() {
    return (
      <div>
        <h2>Parent 组件</h2>
        {this.state.hasError ? <h3>网络不稳定，稍后再试</h3> : <Child />}
      </div>
    );
  }
}
