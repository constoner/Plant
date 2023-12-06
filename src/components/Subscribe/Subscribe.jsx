import React from "react";
import "./style.css";

import TextInput from "../TextInput/TextInput";

const onSuccess = (data, form) => {
  console.log(data);
  setTimeout(() => form.current.submit(), 500);
};

const onSubscribe = (evt, inputRef, formRef) => {
  const regex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  evt.preventDefault();
  const inputData = inputRef.current.value;

  if (regex.test(inputData)) {
    onSuccess(inputData, formRef);
  }
};

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2 className="subscribe__title title">Subscribe Our Newsletter</h2>
      <p className="subscribe__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor,
        accumsan sit amet nunc cursus.
      </p>
      <TextInput
        className="subscribe__input"
        placeholder="Enter mail..."
        button="Subscribe"
        name="email"
        id="email"
        for="email"
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
        required={true}
        buttonCB={onSubscribe}
      />
    </div>
  );
};

export default Subscribe;
