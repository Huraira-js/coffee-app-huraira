import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../../DummyData/dummyData";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    coffeeData: dummyData,
    cartData: [],
  },
  reducers: {
    addCartData: (state, action) => {
      const itemExists = state.cartData.some(
        (item) => item.id === action.payload.item.id
      );

      if (!itemExists) {
        state.cartData = [...state.cartData, action.payload.item];
      }
    },
    updateItemCount: (state, action) => {
      const { id, operation } = action.payload;
      let tempcart = JSON.parse(JSON.stringify(state.cartData));
      let tempcoffee = JSON.parse(JSON.stringify(state.coffeeData));
     
      const updateItemCount = (item, operation) => {
        if (operation === "+") {
          return item.count + 1;
        } else if (item.count > 0) {
          return item.count - 1;
        }
        return item.count;
      };

      const cartItem = tempcart.find((item) => item.id === id);
      const coffeeItem = tempcoffee.find((item) => item.id === id);

      if (cartItem) {
        cartItem.count = updateItemCount(cartItem, operation);
      }

      if (coffeeItem) {
        coffeeItem.count = updateItemCount(coffeeItem, operation);
      }
      state.cartData = [...tempcart];
      state.coffeeData = [...tempcoffee];
    },
    emptyCartDataAndResetCount: (state, action) => {
      const id = action.payload.id;
      state.cartData = state.cartData.filter((item) => item.id !== id);
      const itemToReset = state.coffeeData.find((item) => item.id === id);
      if (itemToReset) {
        itemToReset.count = 0;
      }
      state.coffeeData = [...state.coffeeData];
    },
  },
});

export const { addCartData, updateItemCount, emptyCartDataAndResetCount } =
  cartSlice.actions;
export default cartSlice.reducer;
