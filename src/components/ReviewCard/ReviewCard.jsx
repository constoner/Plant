import React from "react";
import "./style.css";

import Icon from "../Icon/Icon";

const ReviewCard = ({ name, description, text, avatar }) => {
  return (
    <div className="review-card">
      <Icon
        sprite="./images/vector/icons.svg"
        id="quotation"
        width="40"
        height="40"
        alt=""
        aria-hidden={true}
      />
      <div className="review-card__header">
        <div className="review-card__avatar">
          <img
            className="review-card__img"
            src={avatar}
            width="60"
            height="60"
            alt="User's avatar."
          />
        </div>
        <p className="review-card__name">{name}</p>
        <p className="review-card__description">{description}</p>
      </div>
      <div className="review-card__container">
        <p className="review-card__text">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
