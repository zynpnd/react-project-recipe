import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">
            <img src={logo} alt="logo" />
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="tab">
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li class="tab">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
