import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import productReducer from "../Slice/productSlice";
import orderReducer from "../Slice/orderSlice";
import cartReducer from "../Slice/cartSlice";
import filterReducer from "../Slice/filterSlice";
import checkoutReducer from "../Slice/checkoutSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
  checkout: checkoutReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
