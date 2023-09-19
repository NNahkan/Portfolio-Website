// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import profile from "../../assets/profile.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  const handleList = () => {
    const navbarItems = document.querySelectorAll(`.${s.navbarItem}`);
    navbarItems.forEach((item, ind) => {
      ind !== 0 && item.classList.toggle(s.isVisible);
    });
  };

 

  return (
    <nav className={s.navbar}>
      <div className={s.navbarFlex}>
        <Link className={s.navbarItem} to="/">
          <img src={profile} alt="" />
        </Link>
        <ul className={s.navbarList}>
          <BurgerMenu handleList={handleList} />
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
