import React from "react";
import s from "./Experience.module.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ item }) => {
  const { name, position, year, location, definitions } = item;
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work ${s.experienceCard}`}
      contentStyle={{ background: "var(--verticalList-color)", color: "#fff" }}
      contentArrowStyle={{
        borderRight: "7px solid  var(--verticalList-color)",
      }}
      date={year}
		iconClassName={s.elementIcon}
    >
      <h3 className="vertical-timeline-element-title">{name}</h3>
      <h4 className="vertical-timeline-element-subtitle">{position}</h4>
		<div>a</div>
      <p>{location}</p>
      <ul>
        {definitions.map((work, ind) => (
          <li key={ind}>{work}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default Experience;
/* const Experience = ({ item }) => {
  const { name, position, year, location, definitions } = item;
  return (
    <VerticalTimelineElement className={s.experienceSingle}>
      <div>
        <h4>{name}</h4>
        <p>{position}</p>
        <p>
          {year} | {location}
        </p>
        <ul className={s.expList}>
          {definitions.map((work, ind) => (
            <li key={`${ind}${name}`}>{work}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default Experience; */
