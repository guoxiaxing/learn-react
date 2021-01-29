import "./App.css";
// import Demo from "./components/setState";
import "antd/dist/antd.css";
// import { Breadcrumb, Spin } from "antd";
// import {
//   Route,
//   BrowserRouter as Router,
//   Switch,
//   Link
//   // withRouter
// } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import { lazy, Suspense } from "react";
import HookDemo from "./components/Hooks";

// 路由懒加载
// const Home = lazy(() => import("./components/Home"));
// const About = lazy(() => import("./components/About"));

function App() {
  return (
    // <div className="App">
    //   <Demo name={"Demo setState"} />
    // </div>

    <div className="App">
      {/* <Router>
        <>
          <h1>React Router Demo</h1>

          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/about">About</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Switch> */}
      {/* fallback 当路由组件还没有异步加载到的时候 显示的组件（但是这个组件不能懒加载 需要使用直接 import 的形式来导入） */}
      {/* <Suspense fallback={<Spin />}>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Suspense>
          </Switch>
        </>
      </Router> */}
      <HookDemo />
    </div>
  );
}

export default App;
