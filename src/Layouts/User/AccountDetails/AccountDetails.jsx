import React, { useState, useEffect } from "react";
import "./AccountDetails.css";
import Avatar from "../../../images/avatar.webp";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import {
  REMOVE_ACTIVE_USER,
  selectIsLoggedIn,
  selectUserName,
} from "../../../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderHistory from "../OrderHistory/OrderHistory";
const AccountDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayEmail, setDisplayEmail] = useState("");
  const displayUserName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0 });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setDisplayEmail(user.email);
      }
    });
  }, []);
  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        dispatch(REMOVE_ACTIVE_USER());
        navigate("/accounts/login");
        toast.info("LOGGED OUT");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.danger(error.message);
      });
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isLoggedIn ? (
        <section className="account-container">
          <div className="account-top">
            <div className="infomation">
              <img src={Avatar} alt="avatar" />

              <div>
                <p className="user-email">{displayEmail}</p>
                <p className="user-email">{displayUserName}</p>
              </div>
            </div>
            <div className="log-out">
              <p>ACCOUNT</p>
              <button onClick={() => logOutUser()}>LOG OUT</button>
            </div>
          </div>
          <div className="account-main">
            <OrderHistory />
          </div>
        </section>
      ) : (
        <div className="log-in">
          <p>PLEASE LOG IN FIRST</p>
          <button onClick={() => navigate("/accounts/login")}>LOG IN</button>
        </div>
      )}
    </>
  );
};

export default AccountDetails;
