/** src/redux/store.js
 *
 * creates a counter store
 */

import { createStore, applyMiddleware } from "redux";
import countReducer from "./count-reducer";
import { checkOddSumMiddleware } from "./checkOddSumMiddleware";

/*createStore() accepts a counter reduer 
*a second argument can be passed to initialize the state,
but we initialize the state inside the reducer
*/
export default createStore(
  countReducer,
  applyMiddleware(checkOddSumMiddleware)
);
