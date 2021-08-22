import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">
          <img src={logo} alt="logo" />
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="tab">
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
