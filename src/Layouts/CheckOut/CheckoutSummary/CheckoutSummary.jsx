import React, { useState } from "react";
import "./CheckoutSummary.css";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../../redux/Slice/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  console.log("🚀 ~ file: CheckoutSummary.jsx ~ line 15 ~ CheckoutSummary ~ cartTotalAmount", cartTotalAmount)
  const [subTotal, setSubTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setSubTotal(cartTotalAmount);
  }, [subTotal]);
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
          <p>
            <b>Cart Item(s)</b> : {cartTotalQuantity}
          </p>
          <p>
            <b>Shipping Costs</b> : &nbsp;
            {Number(subTotal) >= 40 ? `Free Shipping Costs` : `S$ 15`}
          </p>
          <div className="subtotal">
            <span className="subtotal-title">SubTotal :</span>
            <span className="subtotal-money">
              S$ &nbsp;
              {Number(subTotal) >= 40
                ? Number(subTotal).toFixed(2)
                : (Number(subTotal) + 15).toFixed(2)}
            </span>
          </div>
          {cartItems.map((item) => {
            const { id, name, price, cartQuantity, main_image_url } = item;
            return (
              <div key={id} className="product-card">
                <h4>Product: {name}</h4>
                <div className="product-card-infomation">
                  <div>
                    <p>Quantity: {cartQuantity}</p>
                    <p>Unit Price: S$ {price.toFixed(2)}</p>
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
