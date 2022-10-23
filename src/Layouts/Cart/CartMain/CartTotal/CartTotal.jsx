import React, { useEffect } from "react";
import "./CartTotal.css";
import { ReactComponent as Card1 } from "../../../../images/Card-1.svg";
import { ReactComponent as Card2 } from "../../../../images/Card-2.svg";
import { ReactComponent as Card3 } from "../../../../images/Card-3.svg";
import { ReactComponent as Card4 } from "../../../../images/Card-4.svg";
import { ReactComponent as Card5 } from "../../../../images/Card-5.svg";
import { ReactComponent as Card6 } from "../../../../images/Card-6.svg";
import { ReactComponent as Card7 } from "../../../../images/Card-7.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../../../redux/Slice/cartSlice";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const distance = Number(20 - cart.cartTotalAmount).toFixed(2);
  return (
    <div className="cartTotal-container">
      <p className="title">Subtotal:</p>
      <p className="totalAmount">
        $<span>{Number(cart.cartTotalAmount).toFixed(2)}</span> SGD
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
      <button>CHECKOUT</button>
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
        console.log('abc')
        Delivery date is estimated, please select delivery method and the
        delivery fees will be reflected at the later step.
      </p>
    </div>
  );
};

export default CartTotal;
