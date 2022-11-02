import React, { Component } from "react";
import image from "../img/Logo.png";

export default class testComponent extends Component {
  render() {
    return (
      <div>
        <img src={image} alt={"Logo"} className="logo"/>
      </div>
    );
  }
}