import React, { useContext, useEffect } from "react";
import "./style.css";
import PageData from "../../App/Context";

import Loading from "../../misc/Loading/Loading";
import ReviewsContent from "./ReviewsContent";

const Reviews = () => {
  const { reviewsState } = useContext(PageData);
  const { loadReviews, reviewsLoading, reviewsData } = reviewsState();

  useEffect(() => {
    loadReviews();
  }, []);

  return reviewsLoading ? (
    <Loading className="reviews__swiper" />
  ) : (
    <ReviewsContent reviews={reviewsData} />
  );
};

export default Reviews;
