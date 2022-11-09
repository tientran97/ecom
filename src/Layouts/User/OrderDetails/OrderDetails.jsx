import React, { useState } from "react";
import "./OrderDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useEffect } from "react";
const OrderDetails = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState(null);

  const { document } = useFetchDocument("orders", id);
  useEffect(() => {
    setOrders(document);
  }, [document, orders]);

  const navigate = useNavigate();

  return (
    <section className="order-details-container">
      <p className="order-details-title">ORDER DETAILS</p>
      <div className="back-to-orders">
        <Link to="accounts/profile"> &larr; Back to Orders</Link>
      </div>
      <br />
      {orders === null ? (
        <LoadingSpinner />
      ) : (
        <>
          <p>
            <b>Order ID</b> : {orders.id}
          </p>
          <p>
            <b>Order Amount</b> : S$ {orders.orderAmount}
          </p>
          <p>
            <b>Order Status</b>: {orders.orderStatus}
          </p>
          <br />
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th className="order-details-price">Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.cartItems.map((cartItem, index) => {
                const { id, name, price, main_image_url, cartQuantity } =
                  cartItem;
                return (
                  <tr key={index}>
                    <td>
                      <p>
                        <b>{name}</b>
                      </p>
                      <img
                        src={main_image_url}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td className="order-details-price">S$ {price}</td>
                    <td>{cartQuantity} </td>
                    <td>S$ {Number(price * cartQuantity).toFixed(2)}</td>

                    <td>
                      <button onClick={() => navigate(`/review-product/${id}`)}>
                        Submit Review
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default OrderDetails;
