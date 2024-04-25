import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/slice";

// 資料庫
const store = configureStore({
  reducer:{
    counter:counterSlice
  },
});

export default store;