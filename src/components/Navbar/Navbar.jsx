// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import profile from "../../assets/profile.png";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
		<div className="menu-bar">
			<div className="bar"></div>
			<div className="bar"></div>
			<div className="bar"></div>
		</div>
		{/* 
		Design a symbol for user to click
		After clicking symbol should be close button
		Menu should appear
		When user click the list item , menu need to disappear
		*/}
      <div className={s.navbarFlex}>
        <Link className={s.navbarItem} to="/">
          <img src={profile} alt="" />
        </Link>
        <ul className={s.navbarList}>
          <li className={s.navbarItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={s.navbarItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={s.navbarItem}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={s.navbarItem}>
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
