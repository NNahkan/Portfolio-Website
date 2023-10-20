import React from "react";
import s from "./Projects.module.css";
import saas from "../../assets/saas.png";
import commerceWithApi from "../../assets/commerceWithApi.png";
import commerce from "../../assets/commerce.png";
import poke from "../../assets/poke.png";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .6,
    },
  },
};

const Projects = () => {
  const data = [
    {
      image: saas,
      header: "Saas",
      detail:
        "I tackled this SaaS project single-handedly, working exclusively with HTML, CSS, and. The main hurdles involved designing a responsive layout. To address these challenges, I leveraged my skills in these core web technologies to create an effective, user-friendly solution.",
      link: "https://nnahkan.github.io/SaaS-Website/",
    },
    {
      image: commerceWithApi,
      header: "Tech E-Commerce App",
      detail:
        "In my Ecommerce project, I ventured into backend integration for the first time. This project challenged me to connect the frontend with a backend-as-a-service (BAAS) by diving deep into documentation. Notably, I continued my journey without React hooks or React Router, making it an exploration of effective backend utilization in web development.",
      link: "https://nnahkan.github.io/commerce-with-api/",
    },
    {
      image: commerce,
      header: "Commerce",
      detail:
        "Commerce project marks my first foray into React development, despite limited backend knowledge. I grappled with prop drilling, delving into React hooks and state management for solutions. Remarkably, I intentionally omitted React Router and React hooks to challenge myself and expand my skills. This project underscores my commitment to learning and growth as I navigate the exciting world of web development.",
      link: "https://nnahkan.github.io/commerce9/",
    },
    {
      image: poke,
      header: "Poke",
      detail:
        "Building the Poke website came with its own set of challenges. I had to thoroughly go through the PokeAPI documentation, figure out how to connect to it, and then use plain JavaScript to dynamically generate the HTML content.",
      link: "https://nnahkan.github.io/js-website-with-api/",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="section-header">Projects</h1>
        <p>
          This is a showcase of my best work in a variety of fields including
          Graphic and Web Design and Product Design.
        </p>
        <p>
          The world of digital design and development is constantly evolving and
          so has my role over the last 2 years. I’m still learning and gaining
          new skills every day.
        </p>
      </div>
      <div className={s.projectsWrap}>
        {data.map((item) => (
          <motion.div
            key={item.link}
            className={s.projectSingle}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={s.imgWrap}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt="" />
              </a>
            </div>
            <div>
              <h4>{item.header}</h4>
              <p>{item.detail} </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
