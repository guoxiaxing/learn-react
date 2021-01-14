import React, { Component } from "react";

export default class About extends Component {
  render() {
    // 路由组件上会有一些特定的属性
    console.log("About 的 props", this.props);
    // 三个固定的props
    // {
    //     "history": {
    //       "length": 20,
    //       "action": "POP",
    //       "location": {
    //         "pathname": "/about",
    //         "search": "",
    //         "hash": "",
    //         "key": "0gh69q"
    //       }
    //     },
    //     "location": {
    //       "pathname": "/about",
    //       "search": "",
    //       "hash": "",
    //       "key": "0gh69q"
    //     },
    //     "match": {
    //       "path": "/about",
    //       "url": "/about",
    //       "isExact": true,
    //       "params": {}
    //     }
    //   }
    return <h1>About Page</h1>;
  }
}
