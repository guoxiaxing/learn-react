import "./App.css";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

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
              <NavLink to="/home" activeClassName="my-active">
                Home
              </NavLink>
              {/* <Link to="/home">Home</Link> */}
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {/* 为选中的路由自定义样式 默认为选中的路由加的类名是active */}
              <NavLink to="/about" activeClassName="my-active">
                About
              </NavLink>
              {/* <Link to="/about">About</Link> */}
            </Breadcrumb.Item>
          </Breadcrumb>

          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </>
      </Router>
    </div>
  );
}

export default App;
