import React from "react";
import s from "./BurgerMenu.module.css";

const BurgerMenu = ({ handleList }) => {
  const handleMenu = () => {
    const bars = document.querySelectorAll(`.${s.bar}`);
    bars.forEach((element) => {
      element.classList.toggle(s.toggle);
    });
    const menuBar = document.querySelector(`.${s.menuBar}`);
    menuBar.classList.toggle(s.toggle);
    handleList();
  };

  return (
    <button onClick={() => handleMenu()} className={s.menuBar}>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
    </button>
  );
};

export default BurgerMenu;
