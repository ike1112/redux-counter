/** src/redux/store.js
 *
 * creates a counter store
 */

import { createStore } from "redux";
import countReducer from "./count-reducer";

/*createStore() accepts a counter reduer 
*a second argument can be passed to initialize the state,
but we initialize the state inside the reducer
*/
export default createStore(countReducer);
