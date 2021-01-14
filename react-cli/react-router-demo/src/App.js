import "./App.css";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
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
              <Link to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/about">About</Link>
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
