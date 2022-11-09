import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../images/Cart.svg";
import { ReactComponent as Plus } from "../../images/PlusSign.svg";
import "./Heading.css";
import { useSelector, useDispatch } from "react-redux";
import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from "../../redux/Slice/cartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/Slice/authSlice";
import { AdminOnlyLink } from "../../components/AdminOnlyRoute/AdminOnlyRoute";
import Drawer from "../../components/Drawer/Drawer";
const Heading = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setIsShowDrawer(!isShowDrawer);
  };

  const hideDrawer = () => {
    setIsShowDrawer(false);
  };

  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const cart = useSelector((state) => state.cart);
  const [displayName, setDisplayName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        setIsLoggedIn(true);
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          })
        );
      } else {
        setIsLoggedIn(false);
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [cart, dispatch, displayName]);

  return (
    <>
      <header>
        <div className="header-main">
          <img
            onClick={() => navigate("/")}
            src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/irvins-logo_250x.png?v=1637218784"
            alt="title"
          />
          {size > 768 && (
            <ul className="header-main--left">
              <li onClick={() => navigate("/")}>Home</li>

              <li onClick={() => navigate("/the-snack-shop")}>Shop</li>
              <li className="subnav">
                <div
                  className="subnavbtn"
                  onClick={() => navigate("/our-story")}
                >
                  About
                  <span>
                    <Plus />
                  </span>
                </div>
                <div className="subnav-container">
                  <div className="subnav-content">
                    <p onClick={() => navigate("/our-story")}>OUR STORY</p>
                    <p onClick={() => navigate("/our-process")}>OUR PROCESS</p>
                    <p onClick={() => navigate("/the-irv-files")}>
                      THE IRV FILES
                    </p>
                    <p
                      onClick={() => navigate("/find-irvins-near-you")}
                      style={{ lineHeight: "30px" }}
                    >
                      FIND IRVING NEAR YOU
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>

        {size > 768 && (
          <ul className="header-main--right">
            <li className="admin-btn">
              <AdminOnlyLink>
                <button onClick={() => navigate("/admin/home")}>ADMIN</button>
              </AdminOnlyLink>
            </li>
            {isLoggedIn === false && (
              <li onClick={() => navigate("/accounts/login")}>Login</li>
            )}
            {isLoggedIn && (
              <li onClick={() => navigate("/accounts/profile")}>
                Hi,{displayName}
              </li>
            )}

            <li
              onClick={() => navigate("/cart")}
              className="cartIcon-container"
            >
              <CartIcon className="cartIcon-symbol" />
              <div>{cartTotalQuantity}</div>
            </li>
          </ul>
        )}
        {size <= 768 && (
          <button
            onClick={() => toggleDrawer()}
            className={isShowDrawer ? "hamburger-menu" : "hamburger-menu2"}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        )}
      </header>
      <Drawer
        cartTotalQuantity={cartTotalQuantity}
        isLoggedIn={isLoggedIn}
        displayName={displayName}
        isShowDrawer={isShowDrawer}
        hideDrawer={hideDrawer}
      />
    </>
  );
};

export default Heading;
