import React from "react";
import { ReactComponent as Line } from "../../../images/line.svg";
import "./Review.css";

const Review = (review_number, review_rate, reviews) => {
  return (
    <div className="review-container">
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <p className="review-title">WHAT PEOPLE SAY ABOUT THIS PRODUCT</p>
            <p className="review_rate">{review_rate}</p>
            <p>Base on {review_number}</p>
            <div className="review-content">
              <div className="content-top">
                <p className="name">{review.fullName}</p>
                <p>{review.time}</p>
              </div>
              <div className="content-mid">
                <p>{review.title}</p>
                <p>{review.content}</p>
              </div>
              <Line />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
