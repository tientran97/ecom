import React, { useState } from "react";
import "./ReviewProduct.css";
import { selectUserId, selectUserName } from "../../../redux/Slice/authSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import StarsRating from "react-star-rate";
import { selectProducts } from "../../../redux/Slice/productSlice";
import { useSelector } from "react-redux";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { toast } from "react-toastify";
import { useEffect } from "react";
const ReviewProduct = () => {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const userID = useSelector(selectUserId);
  const userName = useSelector(selectUserName);
  useEffect(() => {
     
  },[id])
  const product = products.find((item) => {
    return item.id === id;
  });

  const navigate = useNavigate();
  const submitReview = (e) => {
    const today = new Date();
    const date = today.toDateString();
    const reviewConfig = {
      userID,
      userName,
      productID: id,
      rate,
      review,
      reviewDate: date,
      createAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "reviews"), reviewConfig);
      toast.success("Review submitted!");
      setRate(0);
      setReview("");
      navigate("/accounts/profile");
    } catch (error) {
      toast.error(error.message);
    }
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
