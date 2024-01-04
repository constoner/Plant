import React from "react";
import "./style.css";

import TextInput from "../../misc/TextInput/TextInput";

const FAQcontent = ({ data, buttonCB }) => {
  return (
    <section className="questions">
      <h2 className="questions__title title">Frequently Asked Questions</h2>
      <div className="questions__container">
        <dl className="questions__list">
          {data.map((item, index) => {
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
      </div>
    </section>
  );
};

export default FAQcontent;
