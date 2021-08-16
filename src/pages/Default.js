import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light ">
          UPPPPS !! You are in the wrong place ...
        </h2>
        <Link to="/" className=" btn btn-light btn-lg mt-3">
          <i class="far fa-hand-point-left fa-7x"></i>
        </Link>
      </Header>
    );
  }
}

export default Default;
