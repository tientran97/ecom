import React, { useState } from "react";
import "./CheckOutDetails.css";
import { CountryDropdown } from "react-country-region-selector";
import { SAVE_SHIPPING_ADDRESS } from "../../../redux/Slice/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../../redux/Slice/cartSlice";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

const initialAddressState = {
  name: "",
  address: "",
  city: "",
  state: "",
  postal_code: "",
  phone_number: "",
  country: "",
};
const CheckoutDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });


  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
    setShippingAddress({ ...initialAddressState });
    // navigate('/checkout')
    console.log(shippingAddress);
  };
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section>
        <p className="checkout-heading">Checkout Details</p>
        <div className="checkout-container">
          <div className="checkout-container-left">
            <h3>Shipping Address</h3>
            <form onSubmit={handleSubmit}>
              <label>Recipient Name :</label>
              <input
                type="text"
                placeholder="Recipient Name"
                name="name"
                value={shippingAddress.name}
                onChange={(e) => {
                  handleShipping(e);
                }}
                required
              />
              <label>Address Line :</label>
              <input
                type="text"
                placeholder="Address Line"
                name="address"
                value={shippingAddress.address}
                onChange={(e) => {
                  handleShipping(e);
                }}
                required
              />
              <label>City :</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={shippingAddress.city}
                onChange={(e) => {
                  handleShipping(e);
                }}
                required
              />
              <label>State :</label>
              <input
                type="text"
                placeholder="State"
                name="state"
                value={shippingAddress.state}
                onChange={(e) => {
                  handleShipping(e);
                }}
                required
              />
              <label>Postal Code :</label>
              <input
                type="text"
                placeholder="Postal Code"
                name="postal_code"
                value={shippingAddress.postal_code}
                onChange={(e) => {
                  handleShipping(e);
                }}
                required
              />
              <label> Country :</label>
              <CountryDropdown
                valueType="short"
                classes="country"
                value={shippingAddress.country}
                onChange={(val) =>
                  handleShipping({
                    target: {
                      name: "country",
                      value: val,
                    },
                  })
                }
              />
              <label>Phone Number :</label>
              <input
                type="number"
                placeholder="Phone Number"
                name="phone_number"
                value={shippingAddress.phone_number}
                onChange={(e) => {
                  handleShipping(e);
                }}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="checkout-container-right">
            <h3>Checkout Summary</h3>
                <CheckoutSummary/>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutDetails;
