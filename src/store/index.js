import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
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
