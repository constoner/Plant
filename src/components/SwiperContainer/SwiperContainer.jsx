import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./style.css";

import ReviewCard from "../ReviewCard/ReviewCard";
import Icon from "../Icon/Icon";

const SwiperContainer = ({ className }) => {
  return (
    <Swiper
      className={className}
      tag="div"
      wrapperTag="ul"
      spaceBetween="100"
      modules={[Navigation]}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
    >
      <SwiperSlide tag="li">
        <ReviewCard
          name="Hasanul Islam"
          description="Marketing CEO"
          avatar="./images/reviews/review-1.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at."
        />
      </SwiperSlide>
      <SwiperSlide tag="li">
        <ReviewCard
          name="Jane Doe"
          description="Creative producer"
          avatar="./images/reviews/review-2.jpg"
          text="Converge are awesome!"
        />
      </SwiperSlide>
      <button className="prev" aria-label="Previous review">
        <Icon
          sprite="./images/vector/icons.svg"
          name="arrow"
          width="10"
          height="7"
          aria-hidden={true}
        />
      </button>
      <button className="next" aria-label="Next review">
        <Icon
          sprite="./images/vector/icons.svg"
          name="arrow"
          width="10"
          height="7"
          aria-hidden={true}
        />
      </button>
    </Swiper>
  );
};

export default SwiperContainer;
