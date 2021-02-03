// import React, { Component } from "react";
import React, { PureComponent } from "react";
import "./inde.css";
import { Button } from "antd";

// 类组件有两个问题：
// 1. 只要调用setState 即使传了一个空对象 数据没有发生任何改变 也会导致组件重新render。==> 效率低
// 2. 父组件重新 render 子组件也会重新 render ==> 效率低

// 效率高的做法
// 当组件的state/props发生变化的时候再去重新render

// 原因
// Component 组件的 shouldComponentUpdate 生命周期的反回值总是 true

// PureComponent 只是重写了 shouldComponentUpdate 为我们做了一些比较

// class Child extends Component {

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   // （接下来要变化成的）最新的 state 和 props
  //   console.log(nextProps);
  //   console.log(this.props);
  //   // 返回 true 组件会被重新 render 返回false 组件不会被重新 render
  //   // return true;
  //   return this.props.carName === nextProps.carName ? false : true;
  // }
  render() {
    return (
      <div className="child">
        <h3>我是 Child 组件</h3>
        {/* <h4>我接受的车名是 {this.props.carName}</h4> */}
      </div>
    );
  }
}

// export default class Parent extends Component {
export default class Parent extends PureComponent {
  state = {
    carName: "奔驰"
  };

  changeCar = () => {
    // this.setState({
    //   carName: "宝马"
    // });
    // 注意 这样写的时候 组件并不会被重新 render 因为 obj 和 this.state 指向同一个对象 所以 PureComponent 认为它没有发生变化
    // PureComponent 进行的是浅比较 ===
    const obj = this.state;
    obj.carName = "宝马";
    this.setState(obj);
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   // （接下来要变化成的）最新的 state 和 props
  //   // console.log(nextProps, nextState);
  //   // console.log(this.props, this.state);
  //   // 返回 true 组件会被重新 render 返回false 组件不会被重新 render
  //   // return true;
  //   return this.state.carName === nextState.carName ? false : true;
  // }
  render() {
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>我是 Parent 组件</h3>
        <Button onClick={this.changeCar}>Change Car</Button>
        <h4>我的车是 {carName}</h4>
        <Child carName={carName} />
        {/* 父组件重新render 子组件也会被重新render */}
        {/* <Child /> */}
      </div>
    );
  }
}
