import React, { Component } from "react";
// import queryString from "querystring";

export default class Detail extends Component {
  render() {
    // 获取 path 参数
    // const { params } = this.props.match;
    // return <div>Detail {params.id}</div>;
    // 获取 search 参数
    // console.log(this.props);
    // const obj = { name: "tom", age: 18 };
    // console.log(queryString.stringify(obj)); // 序列化对象 转化为 urlencoded 编码的字符串
    // const str = "name=tom&age=18";
    // console.log(queryString.parse(str)); // 解析 urlencoded 为对象
    // const { search } = this.props.location; // search ?id=3 需要使用 react 已经安装的 querystring 参数帮忙解析
    // return <div>Detail {queryString.parse(search.slice(1)).id} </div>;

    console.log(this.props);
    // 获取state 参数
    const { state } = this.props.location;
    return <div>Detail {state ? state.id : ""}</div>;
  }
}
