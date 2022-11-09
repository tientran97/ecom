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

  const [serialNumber, setSerialNumber] = useState(0);
  const [name, setName] = useState("");
  const [expired, setExpired] = useState("");
  const [CVC, setCVC] = useState(0);

  const serialNumberRegex = /\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}/g;
  const nameonCardRegex =
    /(^[A-Z]{2,16})([ ]{0,1})([A-Z]{2,16})?([ ]{0,1})?([A-Z]{2,16})?([ ]{0,1})?([A-Z]{2,16})/g;
  const expiredRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/g;
  const CVCRegex = /^[0-9]{3,4}$/g;
  const handlePayment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!serialNumber.match(serialNumberRegex)) {
      toast.error("Invalid serial number");
      setIsLoading(false);
    } else if (!name.match(nameonCardRegex)) {
      setIsLoading(false);
      toast.error("Invalid name");
    } else if (!expired.match(expiredRegex)) {
      setIsLoading(false);
      toast.error("Invalid expired date");
    } else if (!CVC.match(CVCRegex)) {
      setIsLoading(false);
      toast.error("Invalid CVC Number");
    } else {
      setTimeout(() => {
        saveOrder();
        toast.success("Purchase completed!");
        navigate("/checkout-success");
      }, 3000);
    }
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
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
              <input
                type="text"
                placeholder="1234-1234-1234-1234"
                required
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
              />
              <label>Name on Card: </label>
              <input
                type="text"
                placeholder="Ex. JOHN DOE"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="payment-detail">
                <div>
                  <label>Expiration Date:</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    required
                    value={expired}
                    onChange={(e) => setExpired(e.target.value)}
                  />
                </div>
                <div>
                  <label>CVC:</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    required
                    value={CVC}
                    onChange={(e) => setCVC(e.target.value)}
                  />
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
