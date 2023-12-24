import React from "react";
import "./style.css";
import { catalogMaxRank } from "../../../utils/CONSTANTS";

import Icon from "../../misc/Icon/Icon";

const Card = ({ name, href, imgSource, rank, price }) => {
  const rankArray = Array.from({ length: catalogMaxRank }).map(
    (item, index) => {
      return index < rank
        ? (item = { color: "var(--accent-yellow)" })
        : (item = { color: "var(--transparent-black)" });
    }
  );

  return (
    <div className="card">
      <div className="card__image">
        <img
          src={process.env.PUBLIC_URL + imgSource}
          width={180}
          height={153}
          alt="."
          loading="lazy"
        />
      </div>
      <a className="card__title title" href={href}>
        {name}
      </a>
      <div
        className="card__rank"
        id="rank"
        aria-label={`rating: ${rank / catalogMaxRank}`}
      >
        {rankArray.map((item, index) => {
          return (
            <Icon
              sprite="/images/vector/icons.svg"
              name="star"
              width={16}
              height={16}
              aria-hidden={true}
              style={item}
              key={`rank_${index}`}
            />
          );
        })}
      </div>
      <p className="card__price">{`$${price}`}</p>
    </div>
  );
};

export default Card;
