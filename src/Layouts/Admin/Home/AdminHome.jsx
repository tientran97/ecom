import React from "react";
import "./AdminHome.css";
import { useDispatch, useSelector } from "react-redux";
import useFectchCollection from "../../../customHooks/useFetchCollection";
import {
  CALCULATE_ORDER_AMOUNT,
  selectOrderHistory,
  selectTotalOrderAmount,
  STORE_ORDER,
} from "../../../redux/Slice/orderSlice";
import {
  selectProducts,
  STORE_PRODUCTS,
} from "../../../redux/Slice/productSlice";
import { useEffect } from "react";
import Chart from "../../../components/Chart/Chart";
const AdminHome = () => {
  const products = useSelector(selectProducts);
  const orders = useSelector(selectOrderHistory);
  const totalOrderAmount = useSelector(selectTotalOrderAmount);

  const dispatch = useDispatch();
  const productsFetch = useFectchCollection("products");
  const { data } = useFectchCollection("orders");

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: productsFetch.data,
      })
    );
    dispatch(STORE_ORDER(data));
    dispatch(CALCULATE_ORDER_AMOUNT());
  }, [dispatch, data, productsFetch.data]);

  return (
    <div className="admin-container-right">
      <h1>ADMIN HOME</h1>
      <div className="info">
        <div className="card">
          <h3>EARNINGS</h3>
          <p>
            S$ {totalOrderAmount}
            <i className="fa-solid fa-dollar-sign"></i>
          </p>
        </div>
        <div className="card">
          <h3>PRODUCTS</h3>
          <p> 
            {products.length} <i className="fa-solid fa-cart-shopping"></i>
          </p>
        </div>
        <div className="card">
          <h3>ORDER</h3>
          <p>
            {orders.length} <i className="fa-solid fa-check"></i>
          </p>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default AdminHome;
