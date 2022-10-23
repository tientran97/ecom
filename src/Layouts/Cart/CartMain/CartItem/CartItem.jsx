import React from "react";
import CartTotal from "../CartTotal/CartTotal";
import "./CartItems.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
} from "../../../../redux/Slice/cartSlice";
const CartItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };
  return (
    <div className="cartItem-wrapper">
      {cart.cartItems.length === 0 ? (
        <section className="cartItem-container">
          <div className="cart-empty">
            <p>CART IS EMPTY</p>
            <button onClick={() => navigate("/the-snack-shop")}>
              CONTINUE SHOPPING
            </button>
          </div>
        </section>
      ) : (
        <>
          <section className="cartItem-container">
            <table>
              <tr>
                <th>Product</th>
                <th className="quantity">Quantity</th>
                <th className="amount">Amount</th>
                <th className="remove">Remove</th>
              </tr>
              {cart.cartItems?.map((cartItem) => {
                return (
                  <tr key={cartItem.id}>
                    <td>
                      <div className="item-info">
                        <img src={cartItem.main_image_url} alt="" />
                        <div>
                          <p>{cartItem.name}</p>
                          <span> ${Number(cartItem.price).toFixed(2)}SGD</span>
                        </div>
                      </div>
                    </td>
                    <td className="quantity ">
                      <span
                        className="minus-btn"
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </span>
                      <span className="number">{cartItem.cartQuantity}</span>
                      <span
                        className="plus-btn"
                        onClick={() => handleIncreaseCart(cartItem)}
                      >
                        +
                      </span>
                    </td>
                    <td className="amount">
                      <span className="number">
                        $
                        {(
                          Number(cartItem.price) * Number(cartItem.cartQuantity)
                        ).toFixed(2)}
                      </span>
                    </td>
                    <td className="remove ">
                      <span
                        className="remove-btn"
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        x
                      </span>
                    </td>
                  </tr>
                );
              })}
            </table>
            <div className="clear-cart">
              <span onClick={() => handleClearCart()}>Clear Cart</span>
            </div>
          </section>
          <CartTotal />
        </>
      )}
    </div>
  );
};

export default CartItem;
