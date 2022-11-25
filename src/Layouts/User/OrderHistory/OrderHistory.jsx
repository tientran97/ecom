import React, { useEffect } from "react";
import "./OrderHistory.css";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import {
  STORE_ORDER,
  selectOrderHistory,
} from "../../../redux/Slice/orderSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../redux/Slice/authSlice";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
const OrderHistory = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(STORE_ORDER(data));
  }, [dispatch, data]);
  const navigate = useNavigate();
  const userID = useSelector(selectUserId);
  const orders = useSelector(selectOrderHistory);

  const handleClick = (id) => {
    navigate(`/order-details/${id}`);
  };
  const filteredOrders = orders.filter((order) => order.userID === userID);
  return (
    <section className="order-history-container">
      {filteredOrders.length !== 0 && (
        <div>
          <h2> YOUR ORDER HISTORY</h2>
          <p>Open an order to leave a Product Review</p>
        </div>
      )}
      <>
        {isLoading && <LoadingSpinner />}
        <div className="order-history-display">
          {filteredOrders.length === 0 ? (
            <p>You haven't had any orders yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th className="serial-number">s/n</th>
                  <th>Date</th>
                  <th className="order-history-id">Order ID</th>
                  <th>Order Amount</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders?.map((order, index) => {
                  const { id, orderDate, orderTime, orderAmount, orderStatus } =
                    order;
                  return (
                    <tr
                      className="order-history-row"
                      key={index}
                      onClick={() => handleClick(id)}
                    >
                      <td className="serial-number">{index + 1}</td>
                      <td className="order-history-time">
                        {orderDate} at {orderTime}
                      </td>
                      <td className="order-history-id">{id}</td>
                      <td>S$ {orderAmount}</td>
                      <td
                        className={
                          orderStatus !== "Devivered" ? "pending" : "delivered"
                        }
                      >
                        {orderStatus}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </>
    </section>
  );
};

export default OrderHistory;
