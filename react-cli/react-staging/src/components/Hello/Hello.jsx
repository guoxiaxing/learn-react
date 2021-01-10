import { Component } from "react";
import hello from "./Hello.module.css";

class Hello extends Component {
  render() {
    return <h2 className={hello.title}>hello react!!!</h2>;
  }
}

export default Hello;
