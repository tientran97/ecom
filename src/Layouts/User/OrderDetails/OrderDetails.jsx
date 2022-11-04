import React, { useState } from "react";
import "./OrderDetail.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useEffect } from "react";
import StarsRating from "react-star-rate";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../firebase/config";
import { useSelector } from "react-redux";
import { selectUserId, selectUserName } from "../../../redux/Slice/authSlice";

const OrderDetails = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState(null);
  
  const [productID, setProductID] = useState("");

  const { document } = useFetchDocument("orders", id);
  const userID = useSelector(selectUserId);
  const userName = useSelector(selectUserName);
  useEffect(() => {
    setOrders(document);
    setProductID(orders?.cartItems[0].id);
  }, [document, orders]);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const submitReview = (e) => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const reviewConfig = {
      userID,
      userName,
      productID,
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
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="order-details-container">
      <p className="order-details-title">ORDER DETAILS</p>
      <div className="back-to-orders">
        <Link to="accounts/profile"> &larr; Back to Orders</Link>
      </div>
      <br />
      {orders === null ? (
        <LoadingSpinner />
      ) : (
        <>
          <p>
            <b>Order ID</b> : {orders.id}
          </p>
          <p>
            <b>Order Amount</b> : S$ {orders.orderAmount}
          </p>
          <p>
            <b>Order Status</b>: {orders.orderStatus}
          </p>
          <br />
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th className="rating-start">Rating</th>
                <th className="text-review">Review</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.cartItems.map((cartItem, index) => {
                const { id, name, price, main_image_url, cartQuantity } =
                  cartItem;
                return (
                  <tr key={index}>
                    <td>
                      <p>
                        <b>{name}</b>
                      </p>
                      <img
                        src={main_image_url}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>S$ {price}</td>
                    <td>{cartQuantity} </td>
                    <td>S$ {Number(price * cartQuantity).toFixed(2)}</td>

                    <td className="rating-start">
                      <StarsRating
                        value={rate}
                        onChange={(value) => {
                          setRate(value);
                        }}
                      />
                    </td>
                    <td className="text-review">
                      <textarea
                        name="review"
                        value={review}
                        required
                        onChange={(e) => setReview(e.target.value)}
                        cols="40"
                        rows="10"
                      ></textarea>
                    </td>
                    <td>
                      <button onClick={() => submitReview()}>
                        Submit Review
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default OrderDetails;
