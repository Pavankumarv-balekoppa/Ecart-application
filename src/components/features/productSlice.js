import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    totalQuantity: 0,
    cartIsEmpty: true,
  },
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.product.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.product.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.cartIsEmpty = false;
    },
    deletefromcart: (state, action) => {
      const id = action.payload;
      const existingItem = state.product.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.product = state.product.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      if (state.totalQuantity === 0) {
        state.cartIsEmpty = true;
      }
    },
  },
});

export const { addtocart, deletefromcart } = productSlice.actions;

export default productSlice.reducer;
