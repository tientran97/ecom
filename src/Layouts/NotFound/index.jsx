import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="notFound-container">
        <div className="notFound-title">
          <span className="404">404</span>
          <br />
          PAGE NOT FOUND.
        </div>
        <button onClick={() => navigate("/the-snack-shop")}>
          COUNTINUE SHOPPING
        </button>
      </div>
    </>
  );
};

export default NotFound;
