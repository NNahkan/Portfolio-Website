// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <Link className="navbar-item" to="/">
          <img src="https://avatars.githubusercontent.com/u/80037793?v=4" alt="" />
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">Fake project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
