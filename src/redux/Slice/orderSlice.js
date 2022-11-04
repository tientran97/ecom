import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: [],
  totalOrderAmount: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDER(state, action) {
      state.orderHistory = action.payload;
    },
    CALCULATE_ORDER_AMOUNT(state, action) {
      const array = [];

      state.orderHistory.map((item) => {
        const { orderAmount } = item;
        return array.push(Number(orderAmount));
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);

      state.totalOrderAmount = Number(totalAmount).toFixed(2);
    },
  },
});

export const { STORE_ORDER, CALCULATE_ORDER_AMOUNT } = orderSlice.actions;

export const selectOrderHistory = (state) => state.orders.orderHistory;
export const selectTotalOrderAmount = (state) => state.orders.totalOrderAmount;

export default orderSlice.reducer;
