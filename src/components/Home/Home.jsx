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
      <div>
        <a href="">
          <svg
            style={{ fill: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="">
          <svg
            style={{ fill: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
