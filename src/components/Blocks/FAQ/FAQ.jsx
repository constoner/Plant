import React, { useContext } from "react";
import PageData from "../../App/Context.jsx";

import FAQcontent from "./FAQcontent.jsx";

const MIN_QUESTION_LENGTH = 10;

const FAQ = ({ FAQData, id }) => {
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
    inputRef.current.value.length > MIN_QUESTION_LENGTH
      ? onSuccess(inputData, cb, formRef)
      : onMistake();
  };

  return FAQData && FAQData.length ? (
    <FAQcontent id={id} data={FAQData} buttonCB={onSend} />
  ) : null;
};

export default FAQ;
