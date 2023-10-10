// eslint-disable-next-line no-unused-vars
import React from "react";
import s from "./About.module.css";
import Experience from "../../components/Experience/Experience";
import { VerticalTimeline } from "react-vertical-timeline-component";

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

  const experiencesData = [
    {
      name: "Wisdm ",
      position: "Front-end Developer",
      year: "Apr 2023 - present",
      location: "San Francisco",
      definitions: [
        "Collaborating with the development team to design and implement user interfaces with using React-native for the app",
        "Integrating third-party libraries and APIs for enhanced functionality",
        "Optimizing app components for both iOS and Android platforms",
      ],
    },
    {
      name: "Ucyel Energy Engineering",
      position: "Intern",
      year: "2021",
      location: "Ankara, Turkey",
      definitions: [
        "Worked on the exist systems that use electricity to operate the turbine",
        "Research, create, and test materials used to make wind turbines, and ensure that",
      ],
    },
    {
      name: "SDT Space & Defence Technologies",
      position: "Intern",
      year: "2020",
      location: "Ankara, Turkey",
      definitions: [
        "Used machine learning to find and detect object in the satellite pictures",
        "Wrote code, performed testing and debugging, and provided documentation throughout the software development process",
        "Utilized object-oriented programming and design patterns to develop well-structured",
        "Implemented software features using python",
      ],
    },
  ];
  return (
    <div>
      <div className={`container ${s.headerFlex}`}>
        <h1 className="section-header">About Me</h1>
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
      <div className={s.work} >
        <h1>Work Experiences</h1>
        <VerticalTimeline className={s.experiencesFlex}>
          {experiencesData.map((item) => (
            <Experience key={item.name} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
