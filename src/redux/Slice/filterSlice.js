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
    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;
      const tempProduct = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProducts = tempProduct;
    },
   
  },
});

export const { FILTER_BY_CATEGORY, FILTER_BY_SEARCH, SORT_PRODUCT } =
  filterSlice.actions;

export const selectFilterProducts = (state) => state.filter.filteredProducts;
export default filterSlice.reducer;
