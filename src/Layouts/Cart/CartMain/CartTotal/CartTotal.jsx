import React, { useEffect } from "react";
import "./CartTotal.css";
import { ReactComponent as Card1 } from "../../../../images/Card-1.svg";
import { ReactComponent as Card2 } from "../../../../images/Card-2.svg";
import { ReactComponent as Card3 } from "../../../../images/Card-3.svg";
import { ReactComponent as Card4 } from "../../../../images/Card-4.svg";
import { ReactComponent as Card5 } from "../../../../images/Card-5.svg";
import { ReactComponent as Card6 } from "../../../../images/Card-6.svg";
import { ReactComponent as Card7 } from "../../../../images/Card-7.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  SAVE_URL,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../../../redux/Slice/cartSlice";
import { selectIsLoggedIn } from "../../../../redux/Slice/authSlice";

const CartTotal = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [cartItems, dispatch]);

  const url = window.location.href;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const checkOut = () => {
    if (isLoggedIn) {
      navigate("/checkout-details");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/accounts/login");
    }
  };
  const distance = Number(30 - cartTotalAmount).toFixed(2);
  return (
    <div className="cartTotal-container">
      <p className="quantity">
        Cart item(s) : <span>{cartTotalQuantity}</span>
      </p>
      <p className="title">Subtotal:</p>
      <p className="totalAmount">
        $<span>{cartTotalAmount}</span> SGD
      </p>
      {distance > 0 ? (
        <div className="free-delivery">
          <p>ADD ${distance} MORE FOR FREE DELIVERY!*</p>
        </div>
      ) : (
        <div className="free-delivery">
          <p>YOUR SHIPMENT FEE IS FREE</p>
        </div>
      )}
      <p className="delivery">
        <strong>Standard Delivery:</strong> Charges Apply Delivery in 2-4
        working days
      </p>
      <button onClick={() => checkOut()}>CHECKOUT</button>
      <p className="term">
        By click Checkout, you agree to our
        <Link to="/terms-of-service"> Terms &amp; Conditions</Link>
      </p>
      <div className="deposit-card">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
      </div>
      <p className="text">
        Delivery date is estimated, please select delivery method and the
        delivery fees will be reflected at the later step.
      </p>
    </div>
  );
};

export default CartTotal;
