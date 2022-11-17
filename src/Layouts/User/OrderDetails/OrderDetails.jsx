import React, { useState } from "react";
import "./OrderDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useEffect } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { toast } from "react-toastify";
import Notiflix from "notiflix";

const OrderDetails = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState(null);

  const { document } = useFetchDocument("orders", id);
  useEffect(() => {
    setOrders(document);
  }, [document, orders]);

  const navigate = useNavigate();

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "DELETE ORDER !!",
      "You about to cancel this order",
      "delete",
      "cancel",
      function okCb() {
        deleteOrder(id);
      },
      function cancelCb() {
        toast.success("Canceled!");
      },
      {
        width: "320px",
        borderRadius: "12px",
        titleColor: "red",
        okButtonBackground: " red",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteOrder = async (id) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      toast.error("Order canceled");
      navigate("/accounts/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
          <div className="order-details-top">
            <div>
              <p>
                <b>Order ID</b> : {orders.id}
              </p>
              <p>
                <b>Order Amount</b> : S$ {orders.orderAmount}
              </p>
              <p>
                <b>Order Status</b>: {orders.orderStatus}
              </p>
            </div>
            {orders.orderStatus === "Order Placed..." || orders.orderStatus === 'Processing...' ? (
              <button
                className="cancel-order"
                onClick={() => confirmDelete(id)}
              >
                Cancel Order
              </button>
            ) : (
              <button
                disabled
                className="cancel-order"
                onClick={() => confirmDelete(id)}
              >
                Cancel Order
              </button>
            )}
          </div>
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
