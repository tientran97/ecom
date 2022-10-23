import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../images/Cart.svg";
import { ReactComponent as Plus } from "../../images/PlusSign.svg";
import "./Heading.css";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../redux/Slice/cartSlice";

const Heading = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-main--left">
          <span onClick={() => navigate("/the-snack-shop")}>Shop</span>
          <div className="subnav">
            <div className="subnavbtn" onClick={() => navigate("/our-story")}>
              About
              <span>
                <Plus />
              </span>
            </div>
            <div className="subnav-container">
              <div className="subnav-content">
                <p onClick={() => navigate("/our-story")}>OUR STORY</p>
                <p onClick={() => navigate("/our-process")}>OUR PROCESS</p>
                <p onClick={() => navigate("/the-irv-files")}>THE IRV FILES</p>
                <p
                  onClick={() => navigate("/find-irvins-near-you")}
                  style={{ lineHeight: "30px" }}
                >
                  FIND IRVING NEAR YOU
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main--tile">
          <img
            onClick={() => navigate("/")}
            src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/irvins-logo_250x.png?v=1637218784"
            alt="title"
          />
        </div>
        <ul className="header-main--right">
          <li onClick={() => navigate("/accounts/register")}>Login</li>
          <li onClick={() => navigate("/cart")} className="cartIcon-container">
            <CartIcon className="cartIcon-symbol" />
            <div>{cartTotalQuantity}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
