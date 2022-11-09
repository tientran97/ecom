import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminOnlyLink } from "../AdminOnlyRoute/AdminOnlyRoute";
import { ReactComponent as CartIcon } from "../../images/Cart.svg";

import "./Drawer.css";
const Drawer = ({
  isShowDrawer,
  hideDrawer,
  cartTotalQuantity,
  isLoggedIn,
  displayName,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {isShowDrawer && (
        <>
          <section className="drawer-container">
            <ul className="drawer-content">
              <li className="drawer-image">
                <img
                  onClick={() => navigate("/")}
                  src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/irvins-logo_250x.png?v=1637218784"
                  alt="title"
                />
              </li>
              {isLoggedIn === false && (
                <li onClick={() => navigate("/accounts/login")}>Login</li>
              )}
              {isLoggedIn && (
                <li onClick={() => navigate("/accounts/profile")}>
                  <p> Hi,{displayName}</p>
                </li>
              )}
              <li className="admin-btn">
                <AdminOnlyLink>
                  <button onClick={() => navigate("/admin/home")}>ADMIN</button>
                </AdminOnlyLink>
              </li>
              <li
                onClick={() => navigate("/cart")}
                className="cartIcon-container"
              >
                <CartIcon className="cartIcon-symbol" />
                <div>{cartTotalQuantity}</div>
              </li>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/the-snack-shop")}>Shop</li>
              <li onClick={() => navigate("/our-story")}>OUR STORY</li>
              <li onClick={() => navigate("/our-process")}>OUR PROCESS</li>
              <li onClick={() => navigate("/the-irv-files")}>THE IRV FILES</li>
              <li onClick={() => navigate("/find-irvins-near-you")}>
                FIND IRVING NEAR YOU
              </li>
            </ul>
          </section>
          <section
            onClick={() => hideDrawer()}
            className="modal-container"
          ></section>
        </>
      )}
    </>
  );
};

export default Drawer;
