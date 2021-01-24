import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    // 获取 path 参数
    const { params } = this.props.match;
    return <div>Detail {params.id}</div>;
  }
}
