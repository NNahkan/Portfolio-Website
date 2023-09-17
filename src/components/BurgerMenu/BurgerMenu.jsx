import React from "react";
import s from "./BurgerMenu.module.css";

{
  /* 
		Design a symbol for user to click
		After clicking symbol should be close button
		Menu should appear
		When user click the list item , menu need to disappear
		*/
}

const BurgerMenu = () => {
  const handleMenu = () => {
    const bars = document.querySelectorAll(`.${s.bar}`);
    bars.forEach((element) => {
      element.classList.toggle(s.toggle);
    });
    console.log(bars);
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
