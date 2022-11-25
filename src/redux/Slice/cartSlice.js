import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage?.getItem("cartItems")
    ? JSON.parse(localStorage?.getItem("cartItems"))
    : [],
  cartTotalQuantity: localStorage?.getItem("cartTotalQuantity")
    ? JSON.parse(localStorage?.getItem("cartTotalQuantity"))
    : 0,
  cartTotalAmount: localStorage?.getItem("cartSubtotal")
    ? JSON.parse(localStorage?.getItem("cartSubtotal"))
    : 0,
  previousURL: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      const itemIndex = state?.cartItems?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        //item already exist in cart
        // so increase item quantity
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.name} 's quantity increased by one`);
      } else {
        //item doesn't exist in cart
        //add item to cart
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //remove everything from cart
    REMOVE_FROM_CART(state, action) {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = newCartItems;
      toast.error(`${action.payload.name} removed from cart`);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    DECREASE_CART(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      //find if item exist in cart
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        //decrease quantity

        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.error(`${action.payload.name}'s quantity decreased by one`);
      }

      //if there is only 1 quantity
      else if (state.cartItems[itemIndex].cartQuantity === 1) {
        //then remove it from cart
        const newCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        toast.error(`${action.payload.name} removed from cart`);

        state.cartItems = newCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    CLEAR_CART(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    CALCULATE_SUBTOTAL(state, action) {
      const array = [];
      state.cartItems?.map((item) => {
        const { cartQuantity, price } = item;
        const cartItemAmount = price * cartQuantity;
        return array.push(cartItemAmount);
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.cartTotalAmount = totalAmount.toFixed(2);
      localStorage.setItem(
        "cartSubtotal",
        JSON.stringify(state.cartTotalAmount)
      );
    },
    CALCULATE_TOTAL_QUANTITY(state, action) {
      const array = [];

      state.cartItems?.map((item) => {
        const { cartQuantity } = item;
        return array.push(cartQuantity);
      });
      state.cartTotalQuantity = array.length;
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
    },
    SAVE_URL(state, action) {
      state.previousURL = action.payload;
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_CART,
  CLEAR_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  SAVE_URL,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectPreviousURL = (state) => state.cart.previousURL;
export default cartSlice.reducer;
