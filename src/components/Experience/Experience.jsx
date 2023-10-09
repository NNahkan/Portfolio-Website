import React from "react";

const Experience = ({ item }) => {
  const { name, position, year, location, definitions } = item;
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p>{position}</p>
        <p>
          {year} | {location}
        </p>
        <ul>
          {definitions.map((work) => (
            <li>{work}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
