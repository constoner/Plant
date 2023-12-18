import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./style.css";

import ReviewCard from "../ReviewCard/ReviewCard";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";

const SwiperContainer = ({ className }) => {
  const [reviewsData, setReviewsData] = useState([]);

  const getData = () => {
    fetch(process.env.PUBLIC_URL + "/data/reviews.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          let error = new Error(
            "Server is not responding. Please, reload the page"
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => setReviewsData(data))
      .catch((e) =>
        console.warn(
          "Data is corrupted. Please, reload the page" + ", " + e.message
        )
      );
  };

  useEffect(() => {
    getData();
  }, []);

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
      {reviewsData.length ? (
        reviewsData.map((item, index) => {
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
