import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_CATEGORY(state, action) {
      const { products, category } = action.payload;
      let tempProduct = [];
      if (category === "all") {
        tempProduct = products;
      } else {
        tempProduct = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = tempProduct;
    },
  },
});

export const { FILTER_BY_CATEGORY } = filterSlice.actions;

export const selecteFilterProducts = (state) => state.filter.filteredProducts;
export default filterSlice.reducer;
