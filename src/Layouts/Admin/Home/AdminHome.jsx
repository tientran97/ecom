import React from "react";
import "./AdminHome.css";
const AdminHome = () => {
  return (
    <div className="admin-container-right">
      <h1>ADMIN HOME</h1>
      <div className="info">
        <div className="card">
          <h2>EARNINGS</h2>
          <p>
            $1000 <i className="fa-solid fa-dollar-sign"></i>
          </p>
        </div>
        <div className="card">
          <h2>PRODUCTS</h2>
          <p>
            15 <i className="fa-solid fa-cart-shopping"></i>
          </p>
        </div>
        <div className="card">
          <h2>ORDER</h2>
          <p>
            30 <i className="fa-solid fa-check"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
