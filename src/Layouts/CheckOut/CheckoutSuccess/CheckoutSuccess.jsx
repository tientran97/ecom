import React from "react";
import "./CheckoutSuccess.css";
import { useNavigate } from "react-router-dom";
const CheckOutSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="success">
      <p>CHECK OUT SUCCESS</p>
      <p>THANK YOU FOR YOUR PURCHASE </p>
      <button onClick={() => navigate("/")}>Back for more</button>
      <div>
        <button onClick={() => navigate("/accounts/profile")}>
          View order status
        </button>
      </div>
    </div>
  );
};

export default CheckOutSuccess;
