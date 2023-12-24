import React, { useContext, useEffect } from "react";
import "./style.css";
import PageData from "../../App/Context";

import Loading from "../../misc/Loading/Loading";
import ImgNextGen from "../../misc/ImgNextGen/ImgNextGen";
import SwiperContainer from "../SwiperContainer/SwiperContainer";

const Reviews = () => {
  const { reviewsState } = useContext(PageData);
  const { loadReviews, reviewsLoading, reviewsData } = reviewsState();

  useEffect(() => {
    loadReviews();
  }, []);

  return reviewsLoading ? (
    <Loading className="reviews__swiper" />
  ) : reviewsData.length ? (
    <section className="reviews" id="reviews">
      <div className="reviews__wrapper">
        <div className="reviews__content">
          <h2 className="reviews__title title">What Our Customers Say</h2>
          <p className="reviews__text">
            Every feedback, like every plant, is&nbsp;unique and contributes
            to&nbsp;the beautiful garden of&nbsp;our community. We&rsquo;re
            committed to&nbsp;listening and continuously crafting experiences
            that bring beauty into your life.
          </p>
          <SwiperContainer className="reviews__swiper" data={reviewsData} />
        </div>
        <div className="reviews__image">
          <ImgNextGen
            className="reviews__picture"
            srcJpgX2="/images/decoration/human@2x.jpg"
            fallback="/images/decoration/human.jpg"
            alt="A woman planting succulents."
            width="602"
            height="430"
          />
        </div>
      </div>
    </section>
  ) : null;
};

export default Reviews;
