import "./App.css";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyNavLink from "./components/MyNavLink";

function App() {
  return (
    <div className="App">
      <Router>
        {/** 只能有一个子元素  Link 和 Route 都需要包裹在 Router中使用 而且整个应用需要用同一个 Router 去管理*/}
        <>
          <h1>React Router Demo</h1>
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
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            {/* 一般写在路由的最后 */}
            <Redirect to="/home" />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
