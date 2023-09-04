// eslint-disable-next-line no-unused-vars
import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.homePageContainer}>
      <h1 className={s.homeHeader}>Hi there! 👋</h1>
      <p className={s.homeParap}>
        I'm Ali Hakan Oksuz, a seasoned frontend developer with over 2 years of
        experience. I'm passionate about crafting exceptional web experiences
        and turning lines of code into engaging digital journeys.
      </p>
      <p className={s.homeParap}>
        {" "}
        My love for clean and minimalistic designs guides my work, where I find
        beauty in simplicity and order.If you'd like to chat or collaborate,
        feel free to reach out. Let's bring your web projects to life! Feel free
        to personalize it further to better reflect your unique personality and
        experiences.
      </p>
    </div>
  );
};

export default Home;
