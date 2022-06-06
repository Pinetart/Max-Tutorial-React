import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
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
      state.counter = state.counter + action.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      // state.counter++
      //NEVER do the above, would be changing state snapshot
      return {
        ...state,
        counter: state.counter + 1,
        //   showCounter: state.showCounter,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
        //   showCounter: state.showCounter,
      };
    case "increaseby5":
      return {
        ...state,
        counter: state.counter + action.value,
        // showCounter: state.showCounter,
      };
    case "clear":
      return {
        ...state,
        counter: 0,
      };
    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
        // counter: state.counter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
