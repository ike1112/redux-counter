/**
 * src/redux/count-actions.js
 * this file creates actions
 */

//import the action types
import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (payload) => ({
  type: INCREMENT,
  payload
});
export const createDecrementAction = (payload) => ({
  type: DECREMENT,
  payload
});
