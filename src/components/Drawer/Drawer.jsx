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
  const homeClick = () => {
    hideDrawer();
    navigate("/");
  };
  const userClick = () => {
    hideDrawer();
    if (isLoggedIn === false) {
      navigate("/accounts/login");
    }
    navigate("/accounts/profile");
  };
  const shopClick = () => {
    hideDrawer();
    navigate("/the-snack-shop");
  };
  const cartClick = () => {
    hideDrawer();
    navigate("/cart");
  };
  const storyClick = () => {
    hideDrawer();
    navigate("/our-story");
  };
  const processClick = () => {
    hideDrawer();
    navigate("/our-process");
  };
  const filesClick = () => {
    hideDrawer();
    navigate("/the-irv-files");
  };
  const findClick = () => {
    hideDrawer();
    navigate("/find-irvins-near-you");
  };
  return (
    <>
      {isShowDrawer && (
        <>
          <section className="drawer-container">
            <ul className="drawer-content">
              <li className="drawer-image">
                <img
                  onClick={() => homeClick()}
                  src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/irvins-logo_250x.png?v=1637218784"
                  alt="title"
                />
              </li>
              {isLoggedIn === false && (
                <li onClick={() => userClick()}>Login</li>
              )}
              {isLoggedIn && (
                <li onClick={() => userClick()}>
                  <p> Hi,{displayName}</p>
                </li>
              )}
              <li className="admin-btn">
                <AdminOnlyLink>
                  <button onClick={() => navigate("/admin/home")}>ADMIN</button>
                </AdminOnlyLink>
              </li>
              <li onClick={() => cartClick()} className="cartIcon-container">
                <CartIcon className="cartIcon-symbol" />
                <div>{cartTotalQuantity}</div>
              </li>
              <li onClick={() => homeClick()}>Home</li>
              <li onClick={() => shopClick()}>Shop</li>
              <li onClick={() => storyClick()}>OUR STORY</li>
              <li onClick={() => processClick()}>OUR PROCESS</li>
              <li onClick={() => filesClick()}>THE IRV FILES</li>
              <li onClick={() => findClick()}>FIND IRVING NEAR YOU</li>
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
