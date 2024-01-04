import React from "react";
import "./style.css";

const LongRead = ({ longreadData }) => {
  return longreadData && typeof longreadData === "object" ? (
    <section className="longread">
      <h2 className="longread__title title">{longreadData.title}</h2>
      <div className="longread__back">
        <div className="longread__container">
          {longreadData.content.map((item, index) => (
            <p key={index}>{item[longreadData.title]}</p>
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default LongRead;
