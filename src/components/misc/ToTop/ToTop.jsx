import React, { useEffect, useRef } from "react";
import "./style.css";
import { debounce } from "../../../utils/utils";
import { scrollProps } from "../../../utils/CONSTANTS";

import Icon from "../Icon/Icon";

const ToTop = () => {
  const buttonRef = useRef();

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const showButton = () => {
    if (document.documentElement.scrollTop >= scrollProps.scrollPosition) {
      buttonRef.current.style.visibility = "visible";
      buttonRef.current.style.opacity = 1;
    } else {
      buttonRef.current.style.opacity = "0";
      buttonRef.current.style.visibility = "hidden";
    }
  };

  const debouncedShowButton = debounce(showButton, scrollProps.debounceDelay);

  useEffect(() => {
    document.addEventListener("scroll", debouncedShowButton);
    return () => document.removeEventListener("scroll", debouncedShowButton);
  }, []);

  return (
    <button
      className="to-top"
      type="button"
      aria-label="To top!"
      onClick={scrollUp}
      ref={buttonRef}
    >
      <Icon
        sprite="/images/vector/icons.svg"
        name="arrow"
        width={48}
        height={48}
      />
    </button>
  );
};

export default ToTop;
