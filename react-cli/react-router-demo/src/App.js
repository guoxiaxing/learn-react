import "./App.css";
import "antd/dist/antd.css";
import { Breadcrumb, Button } from "antd";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
  // withRouter
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyNavLink from "./components/MyNavLink";

import React, { Component } from "react";

class App extends Component {
  // 此时当我们点击前进/后退按钮的时候会报错  this.props.history 为 undefined
  // 原因 是 只有路由组件才会有 this.props.history App 是一个普通组件 使用 withRouter 来解决
  // forward = () => {
  //   this.props.history.goForward();
  //   // this.props.history.go(1);
  // };

  // back = () => {
  //   this.props.history.goBack();
  //   // this.props.history.go(-1);
  // };
  render() {
    console.log(this.props, "APP");
    return (
      <div className="App">
        <Router>
          {/** 只能有一个子元素  Link 和 Route 都需要包裹在 Router中使用 而且整个应用需要用同一个 Router 去管理*/}
          <>
            <h1>React Router Demo</h1>
            {/* <Button size="small" onClick={this.forward}>
              前进
            </Button>
            <Button size="small" onClick={this.back}>
              后退
            </Button> */}
            <Breadcrumb>
              <Breadcrumb.Item>
                {/* NavLink 有高亮效果 */}
                {/* <NavLink to="/home" activeClassName="my-active">
                  Home
                </NavLink> */}
                <MyNavLink path="/home" className="my-active">
                  Home
                </MyNavLink>
                {/* <Link to="/home">Home</Link> */}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {/* 为选中的路由自定义样式 默认为选中的路由加的类名是active */}
                {/* <NavLink to="/about" activeClassName="my-active">
                  About
                </NavLink> */}
                <MyNavLink path="/about" className="my-active">
                  About
                </MyNavLink>
                {/* <Link to="/about">About</Link> */}
              </Breadcrumb.Item>
            </Breadcrumb>
            {/* 如果同一个路由设置了多个组件 那么当匹配到这个路由时这些组件都会被展示出来 */}
            {/* 默认当url的path参数改变时会依次查找所有路径 找到相同的就展示对应的组件 */}
            {/* 解决方式  使用 Switch 包裹所有的Route组件 这样只要匹配到了一个就直接展示 不会再向下查找 */}
            <Switch>
              {/* 开启精准匹配 */}
              {/* 注意 如果有嵌套路由时 不能开启严格模式 否则点击子路由的时候会导致无法 match 父路由 而被redirect  */}
              {/* <Route path="/home" exact component={Home} /> */}
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              {/* 一般写在路由的最后 */}
              <Redirect to="/home" />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

// withRouter 接受 一个一般组件 然后给一般组件的props上加上路由组件才有的几个属性
// withRouter 的返回值是一个新的组件
// 但是需要注意的是 widthRouter 返回的组件 也需要在 Router 路由组件的内部使用
// export default withRouter(App);

export default App;
