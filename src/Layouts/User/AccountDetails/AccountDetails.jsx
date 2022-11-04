import React, { useState, useEffect } from "react";
import "./AccountDetails.css";
import Avatar from "../../../images/avatar.webp";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { REMOVE_ACTIVE_USER } from "../../../redux/Slice/authSlice";
import { useDispatch } from "react-redux";
import OrderHistory from "../OrderHistory/OrderHistory";
const AccountDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayEmail, setDisplayEmail] = useState("");
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
        setIsLoading(false);
        dispatch(REMOVE_ACTIVE_USER());
        toast.info("LOGGED OUT");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.danger(error.message);
      });
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section className="account-container">
        <div className="account-top">
          <div className="infomation">
            <img src={Avatar} alt="avatar" />
            <div>
              <p className="user-email">{displayEmail}</p>
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
    </>
  );
};

export default AccountDetails;
