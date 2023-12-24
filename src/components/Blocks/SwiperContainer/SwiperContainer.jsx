import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./style.css";
import PageData from "../../App/Context.jsx";

import ReviewCard from "../ReviewCard/ReviewCard";
import Icon from "../../misc/Icon/Icon";
import Loading from "../../misc/Loading/Loading";

const SwiperContainer = ({ className, data }) => {
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
      {data.length ? (
        data.map((item, index) => {
          return (
            <SwiperSlide tag="li" key={index}>
              <ReviewCard
                name={item.name}
                description={item.description}
                avatar={item.avatar}
                text={item.text}
              />
            </SwiperSlide>
          );
        })
      ) : (
        <SwiperSlide tag="li">
          <Loading
            width="100%"
            height="100%"
            value="Reviews about us will appear here soon"
          />
        </SwiperSlide>
      )}
      <button className="prev" aria-label="Previous review">
        <Icon
          sprite="/images/vector/icons.svg"
          name="arrow"
          width="10"
          height="7"
          aria-hidden={true}
        />
      </button>
      <button className="next" aria-label="Next review">
        <Icon
          sprite="/images/vector/icons.svg"
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
