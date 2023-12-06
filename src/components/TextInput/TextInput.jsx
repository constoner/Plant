import React, { useRef, useState } from "react";
import "./style.css";

const TextInput = ({
  className,
  placeholder,
  button,
  name,
  pattern,
  required,
  buttonCB,
}) => {
  const [value, setValue] = useState("");
  const formRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <form
      className={
        className ? `${className}__text-input text-input` : "text-input"
      }
      method="post"
      action="https://echo.htmlacademy.ru/"
      ref={formRef}
    >
      <label className="text-input__label visually-hidden" htmlFor={name}>
        {`Enter ${name} here:`}
      </label>
      <input
        className="text-input__input"
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        pattern={pattern}
        required={required}
        ref={inputRef}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button
        className="text-input__button button button--small"
        type="submit"
        onClick={(evt) => buttonCB(evt, inputRef, formRef)}
      >
        {button}
      </button>
    </form>
  );
};

export default TextInput;
