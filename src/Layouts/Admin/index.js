import React, { useEffect } from "react";
import AddProduct from "./AddProduct/AddProduct";
import Order from "./Order/Order";
import ViewProduct from "./ViewProduct/ViewProduct";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminHome from "./Home/AdminHome";
import "./index.css";
const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="admin-wrapper">
        <div className="admin-home-container">
          <div className="admin-container-left">
            <div className="admin-identity">
              <p>
                <i className="fa-solid fa-user"></i>ADMIN
              </p>
            </div>
            <div className="admin-routes">
              <button className="route" onClick={() => navigate("/admin/home")}>
                HOME
              </button>
              <button
                className="route"
                onClick={() => navigate("/admin/view-product")}
              >
                VIEW ALL PRODUCTS
              </button>
              <button
                className="route"
                onClick={() => navigate("/admin/add-products/ADD")}
              >
                ADD PRODUCT
              </button>
              <button
                className="route"
                onClick={() => navigate("/admin/order")}
              >
                VIEW ORDERS
              </button>
            </div>
          </div>
          <div className="admin-container-right">
            <Routes>
              <Route path="/home" element={<AdminHome />} />
              <Route path="/add-products/:id" element={<AddProduct />} />
              <Route path="/order" element={<Order />} />
              <Route path="/view-product" element={<ViewProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
