import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    const { path, className, children } = this.props;
    return (
      <NavLink to={path} activeClassName={className}>
        {children}
      </NavLink>
    );
  }
}
