import React from "react";
import "./style.css";
import ROUTES from "../../../utils/ROUTES";

import TextInput from "../../misc/TextInput/TextInput";

const FAQcontent = ({ id, data, buttonCB }) => {
  return (
    <section className="questions" id={id}>
      <h2 className="questions__title title">{data.title}</h2>
      <div className="questions__container">
        <dl className="questions__list">
          {data["content"].map((item, index) => {
            return (
              <div className="questions__wrapper" key={index}>
                <dd>{item.question}</dd>
                <dt>{item.answer}</dt>
              </div>
            );
          })}
        </dl>
        <p className="questions__text title">
          Still have questions? Write to us!
        </p>
        <TextInput
          className="questions"
          placeholder="Ask us anytihng"
          button="Send question"
          type="text"
          name="question"
          buttonCB={buttonCB}
        />
        <p className="questions__small-text">
          By submitting this form you agree to{" "}
          <a href={ROUTES.help + "#privacy"}>the Privacy Policy</a>
        </p>
      </div>
    </section>
  );
};

export default FAQcontent;
