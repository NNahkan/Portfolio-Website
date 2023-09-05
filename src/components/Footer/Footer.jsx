import React from "react";
import s from "./Footer.module.css";
import { pathD } from "../../constast";

const Footer = () => {
  return (
    <div className="container">
      <div className={s.footerFlex}>
        {pathD.map((item) => (
          <a
            className={s.footerLink}
            key={item.path}
            target={item.link && "_blank"}
            href={item.link}
            rel="noreferrer"
          >
            <svg
              style={{ fill: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d={item.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
