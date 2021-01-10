import "./App.css";
// 之所以可以使用这种方式引入 Component 是因为 在 react 库中 export class Component 而并不是解构赋值
import { Component } from "react";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
