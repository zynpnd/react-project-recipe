import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar({ styleClass }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className={`navbar-brand ${styleClass}`}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
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
