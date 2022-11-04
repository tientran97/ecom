import React, { useState } from "react";
import "./ReviewProduct.css";
import { selectUserId, selectUserName } from "../../../redux/Slice/authSlice";
import { useParams } from "react-router-dom";
import StarsRating from "react-star-rate";
import { selectProducts } from "../../../redux/Slice/productSlice";
import { useSelector } from "react-redux";
const ReviewProduct = () => {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const { id } = useParams();
  const products = useSelector(selectProducts);
 
  const userID = useSelector(selectUserId);
  const userName = useSelector(selectUserName);

  const product = products.find((item) => {
    return item.id === id;
  });
 

  const submitReview = (e) => {
    e.prevenDefault();
    console.log(rate, review);
  };
  return (
    <section className="review-product-wrapper">
        <p className="review-product-title">REVIEW PRODUCTS</p>
      <div className="review-product-container">
        <p>
          <b>Product Name : {product.name}</b>
        </p>
        <img src={product.main_image_url} alt={product.name} />
        <form onSubmit={submitReview}>
          <label> Rating:</label>
          <StarsRating
            value={rate}
            onChange={(value) => {
              setRate(value);
            }}
          />
          <label>Review:</label>
          <textarea
            name="review"
            value={review}
            required
            onChange={(e) => setReview(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ReviewProduct;
