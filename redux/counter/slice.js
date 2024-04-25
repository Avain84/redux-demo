import { createSlice } from "@reduxjs/toolkit";

const   initialState = {
  count: 0
}

// 一個 Slice 要有這三個資料
// 把一整塊的資料庫(蛋糕)的其中一個(切片)
// component      index+styled+data
export const counterSlice = createSlice({
  name: 'counter', // 切片的名稱
  initialState, // 切片包含的 state
  // reducer 會放入很多 function 來看如何操作這個 State
  reducers: { // 切片做事情的函式
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  }
});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;