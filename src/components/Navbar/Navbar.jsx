// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";
import burgerMenuStyle from "../BurgerMenu/BurgerMenu.module.css";
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

  const handleBurgerMenu = () => {
    const bars = document.querySelectorAll(`.${burgerMenuStyle.bar}`);
    const menuBar = document.querySelector(`.${burgerMenuStyle.menuBar}`);
    bars.forEach((element) => {
      element.classList.toggle(burgerMenuStyle.toggle);
    });
    menuBar.classList.toggle(burgerMenuStyle.toggle);
    handleList();
  };

  const closeBurgerMenu = () => {
    const isMenuActive = document.querySelector(`.${s.isVisible}`);
    isMenuActive && handleBurgerMenu();
  };

  const navListData = ["contact", "about", "projects"];

  return (
    <nav className={s.navbar}>
      <div className={s.navbarFlex}>
        <Link className={s.navbarItem} to="/">
          <img src={profile} alt="" />
        </Link>
        <ul className={s.navbarList}>
          <BurgerMenu handleBurgerMenu={handleBurgerMenu} />
          {navListData.map((item) => (
            <li key={item} className={s.navbarItem}>
              <Link to={`/${item}`} onClick={closeBurgerMenu}>
                {" "}
                {item}
              </Link>
            </li>
          ))}
          <li className={s.navbarItem}>
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
