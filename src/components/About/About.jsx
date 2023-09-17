// eslint-disable-next-line no-unused-vars
import React from "react";
import s from "./About.module.css";

const About = () => {
  const skillData = [
    "react",
    "javaScript",
    "CSS",
    "HTML",
    "node.js",
    "REST",
    "GIT",
    "github",
    "agile",
    "mongoDB",
  ];
  return (
    <div>
      <div className={`container ${s.headerFlex}`}>
        <h1>About Me</h1>
        <h3>
          Here you will find more information about me,what I do and my current
          skills mostly in terms of programming and technology
        </h3>
      </div>
      <div className={s.detailMeFlex}>
        <div className={s.mySkills}>
          <h2>My Skills</h2>
          <ul className={s.skillList}>
            {skillData.map((item) => (
              <li className={s.skillSingle} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.introduce}>
          <h2>Time to know me!</h2>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
