import React from "react";
import s from "./ToggleTheme.module.css";

const body = "body";
const dataTheme = "data-theme";
const theme = "theme";
const dark = "dark";
const light = "light";

const ToggleTheme = () => {
  const setTheme = (mode) => {
    document.querySelector(body).setAttribute(dataTheme, mode);
    localStorage.setItem(theme, mode);
  };

  const selectedTheme = localStorage.getItem(theme);

  if (selectedTheme === light) {
    setTheme(light);
  }

  const ToggleButton = () => {
    document.querySelector(body).getAttribute(dataTheme) === light
      ? setTheme(dark)
      : setTheme(light);
  };

  return (
    <button className={s.toggleButton} onClick={() => ToggleButton()}></button>
  );
};

export default ToggleTheme;
