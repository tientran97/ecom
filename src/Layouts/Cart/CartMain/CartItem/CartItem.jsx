import React from "react";
import CartTotal from "../CartTotal/CartTotal";
import "./CartItems.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_CART,
  REMOVE_FROM_CART,
  selectCartItems,
} from "../../../../redux/Slice/cartSlice";
import { useEffect } from "react";
const CartItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [cartItems, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(REMOVE_FROM_CART(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(DECREASE_CART(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(ADD_TO_CART(cartItem));
  };
  const handleClearCart = (cartItem) => {
    dispatch(CLEAR_CART(cartItem));
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
              <thead>
                <tr>
                  <th className="serial">No.</th>
                  <th className="product">Product</th>
                  <th className="quantity">Quantity</th>
                  <th className="amount">Amount</th>
                  <th className="remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem, index) => {
                  const { id, name, price, main_image_url, cartQuantity } =
                    cartItem;
                  return (
                    <tr key={id}>
                      <td className="serial">{index + 1}</td>
                      <td>
                        <div className="item-info">
                          <img src={main_image_url} alt="" />
                          <div>
                            <p>{name}</p>
                            <span>${Number(price).toFixed(2)}SGD</span>
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
                        <span className="number">{cartQuantity}</span>
                        <span
                          className="plus-btn"
                          onClick={() => handleIncreaseCart(cartItem)}
                        >
                          +
                        </span>
                      </td>
                      <td className="amount">
                        <span className="number">
                          ${(Number(price) * Number(cartQuantity)).toFixed(2)}
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
              </tbody>
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
