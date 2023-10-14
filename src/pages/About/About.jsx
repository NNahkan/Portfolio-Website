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

  const aboutMeData = [
    `I'm Ali, a Frontend Web Developer with a deep passion for crafting captivating online experiences. I hold a degree in Electrical and Electronic Engineering from Kadirhas University, and I've had the privilege of calling the USA my home for the past 3 years.`,
    `As a Frontend Web Developer, my focus is on the art of creating the front-end of websites and web applications. I believe in the power of the user interface to shape the success of a product. You're welcome to explore some of my projects in the Projects section to get a sense of my work.`,
    `Sharing knowledge with the developer community is a privilege I cherish. I've had the opportunity to learn from so many talented individuals, and it's a pleasure to give back and help others in their learning journey. I'm always on the lookout for opportunities`,
    `Where I can contribute, learn, and grow. If you have a role that aligns with my skills and experience, please don't hesitate to reach out. I'd be honored to explore the possibilities with you.`,
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
          {aboutMeData.map((paragraph, ind) => (
            <p key={`${ind}${paragraph.slice(0, 3)}`}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className={s.work}>
        <h1>Work Experiences</h1>
        <VerticalTimeline
           className={s.experiencesFlex}
        >
          {experiencesData.map((item) => (
            <Experience key={item.name} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
