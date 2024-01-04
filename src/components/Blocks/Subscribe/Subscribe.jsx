import React, { useContext } from "react";
import "./style.css";
import PageData from "../../App/Context.jsx";
import ROUTES from "../../../utils/ROUTES.js";

import TextInput from "../../misc/TextInput/TextInput";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const { popupState } = useContext(PageData);

  const onSuccess = (data, cb, form) => {
    const formData = new FormData(form.current);
    console.log("email:", formData.get("email"));
    popupState().setPopup({
      isBad: false,
      value: "You have successfully subscribed!",
      isVisible: true,
    });
    cb("");
  };

  const onMistake = () => {
    console.warn("Please, enter a valid e-mail");
    popupState().setPopup({
      isBad: true,
      value: "Please, enter a valid e-mail",
      isVisible: true,
    });
  };

  const onSubscribe = (evt, inputRef, cb, formRef) => {
    const regex =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; // eslint-disable-line

    evt.preventDefault();
    const inputData = inputRef.current.value;
    regex.test(inputData) ? onSuccess(inputData, cb, formRef) : onMistake();
  };

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
        type="email"
        name="email"
        id="email"
        for="email"
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" // eslint-disable-line
        required={true}
        buttonCB={onSubscribe}
      />
      <p className="subscribe__small-text">
        By submitting this form you agree to{" "}
        <Link to={ROUTES.privacy}>the Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Subscribe;
