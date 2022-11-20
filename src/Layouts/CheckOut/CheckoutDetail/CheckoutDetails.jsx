import React, { useState } from "react";
import "./CheckOutDetails.css";
import { CountryDropdown } from "react-country-region-selector";
import { SAVE_SHIPPING_ADDRESS } from "../../../redux/Slice/checkoutSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import { toast } from "react-toastify";

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
  const nameRegEx =
    /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/g;

  const postalCodeRegex = /(^\d{5}$)|(^\d{6}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/g;
  const phoneRegex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !shippingAddress.name &&
      !shippingAddress.address &&
      !shippingAddress.city &&
      !shippingAddress.postal_code &&
      !shippingAddress.country &&
      !shippingAddress.phone_number
    ) {
      toast.error("Please enter your infomation");
      setIsLoading(false);
    } else if (!shippingAddress.name.match(nameRegEx)) {
      setIsLoading(false);
      toast.error("Invalid Full Name");
    } else if (shippingAddress.address.length < 6) {
      setIsLoading(false);
      toast.error("Invalid Address !");
    } else if (!shippingAddress.postal_code.match(postalCodeRegex)) {
      setIsLoading(false);
      toast.error("Invalid postal code");
    } else if (!shippingAddress.country) {
      setIsLoading(false);
      toast.error("Country is required!");
    } else if (!shippingAddress.phone_number.match(phoneRegex)) {
      toast.error("Invalid phone number");
      setIsLoading(false);
    } else {
      dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
      setShippingAddress({ ...initialAddressState });
      navigate("/checkout");
      setIsLoading(false);
    }
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
                placeholder="Recipient Full Name"
                name="name"
                value={shippingAddress.name}
                onChange={(e) => {
                  handleShipping(e);
                }}
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
              />
              <label>Postal Code :</label>
              <input
                type="number"
                placeholder="Postal Code"
                name="postal_code"
                value={shippingAddress.postal_code}
                onChange={(e) => {
                  handleShipping(e);
                }}
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
                type="text"
                placeholder="Phone Number"
                name="phone_number"
                value={shippingAddress.phone_number}
                onChange={(e) => {
                  handleShipping(e);
                }}
              />
              <button type="submit">Proceed to check out</button>
            </form>
          </div>
          <div className="checkout-container-right">
            <h3>Checkout Summary</h3>

            <CheckoutSummary />
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutDetails;
