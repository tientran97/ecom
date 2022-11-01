import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/authSlice";
import productsReducers from "../Slice/productsSlice";

import cartReducer from "../Slice/cartSlice";
import productsReducer, { productsFetch } from "../Slice/productSlice";
import { productsApi } from "../Slice/productsApi";
import filterReducer from "../Slice/filterSlice";
import checkoutReducer from "../Slice/checkoutSlice";
// const rootReducer = combineReducers({
//   auth: authReducer,
// });

const store = configureStore({
  reducer: {
    // rootReducer,
    auth: authReducer,
    filter: filterReducer,
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,

    product: productsReducers,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
store.dispatch(productsFetch());

export default store;
