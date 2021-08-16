import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <Header title="Amazing Recipes">
        <Link to="recipes" className="text-uppercase btn btn-light btn-lg  ">
          <i class="fas fa-search"></i>
        </Link>
      </Header>
    );
  }
}

export default Home;
