// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.navbarFlex}>
        <Link className={s.navbarItem} to="/">
          <img
            src="https://avatars.githubusercontent.com/u/80037793?v=4"
            alt=""
          />
        </Link>
        <ul className={s.navbarList}>
          <li className={s.navbarItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={s.navbarItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={s.navbarItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={s.navbarItem}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
