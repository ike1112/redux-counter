/**
 *  src/redux/count-reducer.js
 *
 * create a count reducer
 */

//import the action types
import { INCREMENT, DECREMENT } from "./constant";

const initState = 0; //initialize the state
export default function countReducer(preState = initState, action) {
  //get payload from action
  const { type, payload } = action;
  //update the state based on the action type
  switch (type) {
    case INCREMENT:
      return preState + payload;
    case DECREMENT:
      return preState - payload;
    default:
      return preState;
  }
}
