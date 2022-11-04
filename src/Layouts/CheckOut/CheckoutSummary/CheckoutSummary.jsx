import React from "react";
import "./CheckoutSummary.css";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../../redux/Slice/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const navigate = useNavigate();

  return (
    <div>
      {cartItems.length === 0 ? (
        <>
          <p>No item in cart</p>
          <button
            className="back-to-shopping"
            onClick={() => navigate("/the-snack-shop")}
          >
            Back to Shopping
          </button>
        </>
      ) : (
        <>
          <p>Cart Item(s) : {cartTotalQuantity}</p>
          <div className="subtotal">
            <span className="subtotal-title">SubTotal :</span>
            <span className="subtotal-money">S$ {cartTotalAmount}</span>
          </div>
          {cartItems.map((item) => {
            const { id, name, price, cartQuantity, main_image_url } = item;
            return (
              <div key={id} className="product-card">
                <h4>Product: {name}</h4>
                <div className="product-card-infomation">
                  <div>
                    <p>Quantity: {cartQuantity}</p>
                    <p>Unit Price: S$ {price}</p>
                    <p>
                      Set Price: S$ {Number(price * cartQuantity).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <img src={main_image_url} alt="product" />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CheckoutSummary;
