import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import PageData from "../App/Context.jsx";

const Popup = () => {
  const { popupState } = useContext(PageData);
  const popupClassneme = popupState().popup.isBad
    ? "popup popup--is-bad"
    : "popup";
  const popupRef = useRef(null);

  const onLinkClick = (evt) => {
    if (evt.target.href?.includes("#!")) {
      popupState().setPopup({
        isBad: true,
        value: "Page not found!",
        isVisible: true,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("click", onLinkClick);
    return () => window.removeEventListener("click", onLinkClick);
  }, []);

  if (popupState().popup.isVisible) {
    popupRef.current.style.visibility = "visible";
    popupRef.current.style.opacity = 1;
    setTimeout(() => {
      popupRef.current.style.opacity = 0;
      popupRef.current.style.visibility = "hidden";
      popupState().popup.isVisible = false;
    }, 3000);
  }

  return (
    <div className={popupClassneme} ref={popupRef}>
      {popupState().popup.value}
    </div>
  );
};

export default Popup;
