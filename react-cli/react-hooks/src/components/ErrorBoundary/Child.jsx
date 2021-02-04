import React, { Component } from "react";

export default class Child extends Component {
  state = {
    // users: [
    //   { id: 1, name: "Tom", age: 18 },
    //   { id: 1, name: "Jery", age: 20 },
    //   { id: 1, name: "Lily", age: 15 },
    //   { id: 1, name: "Mary", age: 19 }
    // ]
    users: "abcd"
  };
  render() {
    return (
      <div>
        <h3>Child 组件</h3>
        {this.state.users.map(user => (
          <h4 key={user.id}>
            名字是：{user.name}, 年龄是：{user.age}
          </h4>
        ))}
      </div>
    );
  }
}
