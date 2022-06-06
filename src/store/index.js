import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  //   reducer: { counter: counterSlice.reducer },
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
