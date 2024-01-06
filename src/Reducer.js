import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByVal = createAction("incrementByVal");

const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.c += 1;
    })
    .addCase(incrementByVal, (state, action) => {
      state.c += action.payload;
    })
    .addCase(decrement, (state) => {
      state.c -= 1;
    });
});
