// eslint-disable-next-line no-unused-vars
import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="section-header">Hi there! </h1>
      <p className={s.homeParap}>
        I'm Ali Hakan Oksuz, an experienced frontend developer with over 2 years
        of dedicated work in crafting exceptional web experiences. My passion
        lies in transforming lines of code into engaging digital journeys.
        <p className={s.homeParap}>
          {" "}
          My work is defined by a love for clean, minimalistic designs. I find
          beauty in simplicity and order. If you'd like to chat or explore
          collaboration opportunities, don't hesitate to reach out. Let's work
          together to bring your web projects to life!
        </p>
        <p className={s.homeParap}>
          For more details about my work, please explore my portfolio. I look
          forward to connecting with you.
        </p>
      </p>
    </div>
  );
};

export default Home;
