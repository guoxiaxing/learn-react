import React, { Component } from "react";
import "./inde.css";

class A extends Component {
  state = {
    name: "Tom"
  };
  render() {
    return (
      <div className="a">
        <h3>我是 A 组件</h3>
        {this.props.render(this.state.name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>我是 B 组件</h3>
        {this.props.name}
      </div>
    );
  }
}

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是 Parent 组件</h3>
        <A render={name => <B name={name} />} />
      </div>
    );
  }
}
