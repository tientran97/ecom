import { deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { db } from "../../../firebase/config";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import "./OrderDetail.css";
const OrderDetail = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState(null);

  const [productID, setProductID] = useState("");

  const { document } = useFetchDocument("orders", id);
  useEffect(() => {
    setOrders(document);
    setProductID(orders?.cartItems[0].id);
  }, [document, orders]);
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const orderStatusChange = (e, id) => {
    e.preventDefault();
    setIsLoading(true);
    const orderConfig = {
      userID: orders.userID,
      userEmail: orders.userEmail,
      cartItems: orders.cartItems,
      shippingAddress: orders.shippingAddress,
      orderDate: orders.orderDate,
      orderTime: orders.orderTime,
      orderAmount: orders.orderAmount,
      orderStatus: status,
      createAt: orders.createAt,
      editedAt: Timestamp.now().toDate(),
    };
    try {
      setDoc(doc(db, "orders", id), orderConfig);
      setIsLoading(false);
      toast.success("Order status changed");
      navigate("/admin/orders");
    } catch (error) {
      toast.error(error.message);
      console.log(error.mess);
      setIsLoading(false);
    }
  };
  const orderDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "orders", id));
      toast.error("Product deleted");
      navigate("/admin/orders");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
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
              <div>
                <button onClick={() => orderDelete(id)}>
                  DELETE ORDER HISTORY
                </button>
              </div>
            </div>

            <ul>
              <b>Shipping Address</b>:
              <br />
              <br></br>
              <li>Customer Name : {orders.shippingAddress.name}</li>
              <br />
              <li> Address: {orders.shippingAddress.address}</li>
              <br />
              <li>City: {orders.shippingAddress.city}</li>
              <br />
              <li>Country: {orders.shippingAddress.country}</li>
              <br />
              <li>Phone Number : {orders.shippingAddress.phone_number}</li>
              <br />
            </ul>
            <br />
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.cartItems.map((cartItem, index) => {
                  const { name, price, main_image_url, cartQuantity } =
                    cartItem;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
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
                      <td>S$ {price}</td>
                      <td>{cartQuantity} </td>
                      <td>S$ {Number(price * cartQuantity).toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </section>
      <section className="order-change-box">
        <form onSubmit={(e) => orderStatusChange(e, id)}>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="" disabled>
              --- Change Order Status ---
            </option>
            <option value="Order Placed...">Order Placed...</option>
            <option value="Processing..."> Processing...</option>
            <option value="Delivering..."> Delivering...</option>
            <option value="Delivered"> Delivered</option>
          </select>
          <button type="submit">Update Status</button>
        </form>
      </section>
    </>
  );
};

export default OrderDetail;
