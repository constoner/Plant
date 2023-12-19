import React, { useContext, useEffect } from "react";
import "./style.css";
import PageData from "../App/Context";

import Loading from "../Loading/Loading";
import ImgNextGen from "../ImgNextGen/ImgNextGen";
import SwiperContainer from "../SwiperContainer/SwiperContainer";

const Reviews = () => {
  const { reviewsLoading, reviewsData, loadReviews } = useContext(PageData);

  useEffect(() => {
    loadReviews();
  }, []);

  return reviewsLoading ? (
    <Loading className="reviews__swiper" />
  ) : reviewsData.length ? (
    <section className="reviews" id="reviews">
      <div className="reviews__wrapper">
        <div className="reviews__content">
          <h2 className="reviews__title title">What Our Customers Says</h2>
          <p className="reviews__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
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
