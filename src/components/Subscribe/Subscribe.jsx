import React from "react";
import "./style.css";

import TextInput from "../TextInput/TextInput";

const onSuccess = (data, form) => {
  console.log(data);
  setTimeout(() => form.current.submit(), 500);
};

const onSubscribe = (evt, inputRef, formRef) => {
  const regex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; // eslint-disable-line

  evt.preventDefault();
  const inputData = inputRef.current.value;

  if (regex.test(inputData)) {
    onSuccess(inputData, formRef);
  }
};

const Subscribe = () => {
  return (
    <div className="subscribe" id="subscribe">
      <h2 className="subscribe__title title">Subscribe To Our Newsletter</h2>
      <p className="subscribe__text">
        Join our community of&nbsp;flower enthusiasts by&nbsp;subscribing
        to&nbsp;Plant&rsquo;s exclusive newsletter
      </p>
      <TextInput
        className="subscribe__input"
        placeholder="Enter mail..."
        button="Subscribe"
        name="email"
        id="email"
        for="email"
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" // eslint-disable-line
        required={true}
        buttonCB={onSubscribe}
      />
    </div>
  );
};

export default Subscribe;
