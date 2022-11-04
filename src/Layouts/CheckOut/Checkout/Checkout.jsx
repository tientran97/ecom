import React, { useEffect, useState } from "react";
import "./Checkout.css";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { CLEAR_CART } from "../../../redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { selectEmail, selectUserId } from "../../../redux/Slice/authSlice";
import {
  selectCartItems,
  selectCartTotalAmount,
} from "../../../redux/Slice/cartSlice";
import { selectShippingAddress } from "../../../redux/Slice/checkoutSlice";
const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = useSelector(selectUserId);
  const userEmail = useSelector(selectEmail);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const shippingAddress = useSelector(selectShippingAddress);

  const [isLoading, setIsLoading] = useState(false);
  const handlePayment = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      saveOrder();
      toast.success("Purchase completed!");
      navigate("/checkout-success");
    }, 3000);
  };

  const saveOrder = () => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const orderConfig = {
      userID,
      userEmail,
      cartItems,
      shippingAddress,
      orderDate: date,
      orderTime: time,
      orderAmount: cartTotalAmount,
      orderStatus: "Order Placed...",
      createAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "orders"), orderConfig);
      dispatch(CLEAR_CART());
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="payment-wrapper">
        <p className="payment-title">Check Out</p>
        <div className="payment-container">
          <div className="payment-container-left">
            <h2>Checkout Summary</h2>
            <CheckoutSummary />
          </div>
          <div className="payment-container-right">
            <h2>Payment</h2>
            <form onSubmit={handlePayment}>
              <label>Serial Number</label>
              <input type="number" placeholder="1234 1234 1234 1234" required />
              <label>Name on Card: </label>
              <input type="text" placeholder="Ex. John Doe" required />
              <div className="payment-detail">
                <div>
                  <label>Expiration Date:</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div>
                  <label>CVC:</label>
                  <input type="number" placeholder="CVC" required />
                </div>
              </div>
              <button type="submit">Pay now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
