import { createSlice } from "@reduxjs/toolkit";
import { SearchType } from "../types";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    products: [],
    suggestedSearches: [],
    categories: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSuggestedSearches: (state, action) => {
      state.suggestedSearches = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setProducts,
  setSuggestedSearches,
  setCategories,
} = searchSlice.actions;
export const selectSearchTerm = (state: SearchType) => state.search.searchTerm;
export const selectProducts = (state: SearchType) => state.search.products;
export const selectSuggestedSearches = (state: SearchType) =>
  state.search.suggestedSearches;
export const selectCategories = (state: SearchType) => state.search.categories;

export default searchSlice.reducer;
