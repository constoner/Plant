import React, { useContext } from "react";
import "./style.css";
import PageData from "../../App/Context.jsx";

import TextInput from "../../misc/TextInput/TextInput";

const Questions = () => {
  const { popupState } = useContext(PageData);

  const onSuccess = (data, cb, form) => {
    const formData = new FormData(form.current);
    console.log("question:", formData.get("question"));
    popupState().setPopup({
      isBad: false,
      value: "Thank you! we received your question",
      isVisible: true,
    });
    cb("");
  };

  const onMistake = () => {
    console.warn("Please, enter your question");
    popupState().setPopup({
      isBad: true,
      value: "Please, enter your question",
      isVisible: true,
    });
  };

  const onSend = (evt, inputRef, cb, formRef) => {
    evt.preventDefault();
    const inputData = inputRef.current.value;
    inputRef.current.reportValidity()
      ? onSuccess(inputData, cb, formRef)
      : onMistake();
  };

  return (
    <section className="questions">
      <h2 className="questions__title title">Frequently Asked Questions</h2>
      <div className="questions__container">
        <dl className="questions__list">
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
          <div className="questions__wrapper">
            <dd>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              dolor?
            </dd>
            <dt>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              numquam, laborum quaerat molestias deserunt ipsam? Nulla natus sed
              nesciunt saepe totam nihil, adipisci doloremque quam, soluta
              mollitia blanditiis assumenda eligendi.
            </dt>
          </div>
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
          buttonCB={onSend}
          required={true}
        />
      </div>
    </section>
  );
};

export default Questions;
