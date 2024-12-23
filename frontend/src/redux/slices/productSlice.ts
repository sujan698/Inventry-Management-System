import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    item: {},
  },
  reducers: {
    addProducts: (state, action) => {
      console.log({ action });
      state.data = action.payload;
    },

    findOne: (state, action) => {
      const { id } = action.payload;
      const product = state.data.find((product: any) => product.item_id === id);
      if (product) {
      state.item = product;
      }
    }
  }
});
export const { addProducts, findOne } = productSlice.actions;

export default productSlice.reducer;