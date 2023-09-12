import React from "react";
import s from "./Projects.module.css";
import saas from "../../assets/saas.png";
import commerceWithApi from "../../assets/commerceWithApi.png";
import commerce from "../../assets/commerce.png";

const Projects = () => {
  return (
    <div>
      <div className={s.projectsWrap}>
        <h1>Projects</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          reiciendis{" "}
        </h4>
        <div>
          <div className={s.projectSingle}>
            <div className={s.imgWrap}>
              <img src={saas} alt="" />
            </div>
            <div>
              <h4>Header</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                alias velit doloribus repudiandae error perferendis consequatur
                doloremque sunt eos, obcaecati molestiae? Fugiat necessitatibus
                atque neque rem dolore, illo reiciendis sunt!
              </p>
            </div>
          </div>
          <div className={s.projectSingle}>
            <div className={s.imgWrap}>
              <img src={commerceWithApi} alt="" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              alias velit doloribus repudiandae error perferendis consequatur
              doloremque sunt eos, obcaecati molestiae? Fugiat necessitatibus
              atque neque rem dolore, illo reiciendis sunt!
            </div>
          </div>
          <div className={s.projectSingle}>
            <div className={s.imgWrap}>
              <img src={commerce} alt="" />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              alias velit doloribus repudiandae error perferendis consequatur
              doloremque sunt eos, obcaecati molestiae? Fugiat necessitatibus
              atque neque rem dolore, illo reiciendis sunt!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
