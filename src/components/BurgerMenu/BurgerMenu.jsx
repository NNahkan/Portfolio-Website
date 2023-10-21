import React, { useEffect } from "react";
import s from "./BurgerMenu.module.css";

const BurgerMenu = ({ handleBurgerMenu }) => {
  useEffect(() => {
    const handleResize = () => {
      if (document.querySelector(`.${s.toggle}`) && window.innerWidth >= 640) {
        handleBurgerMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button onClick={handleBurgerMenu} className={s.menuBar}>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
      <div className={s.bar}></div>
    </button>
  );
};

export default BurgerMenu;
