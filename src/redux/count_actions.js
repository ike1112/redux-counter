/**
 * src/redux/count-actions.js
 * this file creates actions
 */

//import the action types
import { INCREMENT, DECREMENT, INCREMENTODD } from "./constant";

export const createIncrementAction = (payload) => ({
  type: INCREMENT,
  payload
});

export const createDecrementAction = (payload) => ({
  type: DECREMENT,
  payload
});

export const createIncrementOddAction = (payload) => ({
  type: INCREMENTODD,
  payload
});
