import React from "react";
import StarsRating from "react-star-rate";
import { ReactComponent as Line } from "../../../images/line.svg";
import "./Review.css";
import "aos/dist/aos.css";
import AOS from "aos";
const Review = (filterReviews) => {
  AOS.init();
  const reviewProduct = filterReviews;

  return (
    <div className="review-container">
      <p
        className="review-title"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
      >
        WHAT PEOPLE SAY ABOUT THIS PRODUCT
      </p>
      {reviewProduct.filterReviews.length === 0 ? (
        <p className="no-review">There is no review for this product</p>
      ) : (
        <>
          {reviewProduct.filterReviews.map((reviewItem) => {
            const { id, rate, reviewDate, userName, review } = reviewItem;
            return (
              <div
                key={id}
                className="review-title"
                data-aos="slide-up"
                data-aos-easing="ease-in-out"
              >
                <p className="review-totalnumber">
                  {reviewProduct.filterReviews.length} reviews
                </p>
                <div className="review-content">
                  <div className="content-top">
                    <div className="content-top-left">
                      <StarsRating value={rate} />
                      <p className="name">{userName}</p>
                    </div>
                    <div className="content-top-right">
                      <p>{reviewDate}</p>
                    </div>
                  </div>
                  <div className="content-mid">
                    <p>{review}</p>
                  </div>
                  <Line />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Review;
