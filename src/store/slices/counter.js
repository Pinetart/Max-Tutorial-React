import { createSlice } from "@reduxjs/toolkit";

//Counter Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    clearCounter(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
