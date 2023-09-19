import React, { useEffect } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      if (document.querySelector(`.${s.toggle}`) && window.innerWidth >= 640) {
        handleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button onClick={() => handleMenu()} className={s.menuBar}>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
    </button>
  );
};

export default BurgerMenu;
