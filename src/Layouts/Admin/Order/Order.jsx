import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import { selectUserId } from "../../../redux/Slice/authSlice";
import {
  selectOrderHistory,
  STORE_ORDER,
} from "../../../redux/Slice/orderSlice";
import "./Order.css";
const OrderAdmin = () => {
  const { data, isLoading } = useFetchCollection("orders");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(STORE_ORDER(data));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, data]);
  const navigate = useNavigate();
  const orders = useSelector(selectOrderHistory);

  const handleClick = (id) => {
    navigate(`/admin/order-details/${id}`);
  };
  return (
    <section className="order-history-container">
      {orders.length !== 0 && (
        <div>
          <h2> ALL ORDER HISTORY</h2>
          <p>
            Open an order to <b>change order status</b>
          </p>
        </div>
      )}
      <>
        {isLoading && <LoadingSpinner />}
        <div className="order-history-display">
          {orders.length === 0 ? (
            <p>You haven't had any orders yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Date</th>
                  <th>Order ID</th>
                  <th>Order Amount</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  const { id, orderDate, orderTime, orderAmount, orderStatus } =
                    order;
                  return (
                    <tr
                      className="order-history-row"
                      key={index}
                      onClick={() => handleClick(id)}
                    >
                      <td className="order-history-index">{index + 1}</td>
                      <td className="order-history-time">
                        {orderDate} at {orderTime}
                      </td>
                      <td className="order-history-id">{id}</td>
                      <td>S$ {orderAmount}</td>
                      <td
                        className={
                          orderStatus !== "Delivered" ? "pending" : "delivered"
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

export default OrderAdmin;
