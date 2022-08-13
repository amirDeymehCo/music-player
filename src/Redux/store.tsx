import { configureStore } from "@reduxjs/toolkit";
import RootSlice from "./Slice";

const store = configureStore({
  reducer: RootSlice,
});

export default store;
