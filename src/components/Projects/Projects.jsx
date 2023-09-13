import React from "react";
import s from "./Projects.module.css";
import saas from "../../assets/saas.png";
import commerceWithApi from "../../assets/commerceWithApi.png";
import commerce from "../../assets/commerce.png";
import poke from "../../assets/poke.png";

const Projects = () => {
  const data = [
    {
      image: saas,
      header: "Saas",
      detail: "saaaaaaaas",
      link: "https://nnahkan.github.io/SaaS-Website/",
    },
    {
      image: commerceWithApi,
      header: "Tech E-Commerce App",
      detail: "ecommmer",
      link: "https://nnahkan.github.io/commerce-with-api/",
    },
    {
      image: commerce,
      header: "Commerce",
      detail: "comerceeeeeeee",
      link: "https://nnahkan.github.io/commerce9/",
    },
    {
      image: poke,
      header: "Poke",
      detail: "Pokeyyy",
      link: "https://nnahkan.github.io/js-website-with-api/",
    },
  ];
  return (
    <div>
      <div className={s.projectsWrap}>
        <h1>Projects</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          reiciendis{" "}
        </h4>
        <div>
          {data.map((item) => (
            <div key={item.link} className={s.projectSingle}>
              <div className={s.imgWrap}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div>
                <h4>{item.header}</h4>
                <p>
                  {item.detail} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Molestiae recusandae necessitatibus rerum
                  vero repellendus amet accusantium totam{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
