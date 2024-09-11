import { configureStore } from '@reduxjs/toolkit';
import cartSlices from './slices/cartSlices';

const store = configureStore({
  reducer: {
    cartData: cartSlices
  }
});

export default store;
