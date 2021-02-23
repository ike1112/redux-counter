import { INCREMENTODD } from "./constant";
import store from "./store";

export function checkOddSumMiddleware() {
  return (next) => {
    return (action) => {
      //do you stuff
      if (action.type === INCREMENTODD) {
        console.log(store.getState() + "-------", store.getState() % 2 === 0);

        if (store.getState() % 2 === 0) {
          return store.dispatch({ type: "NOT_ADD", payload: 0 });
        }
      }
      console.log(store.getState() + "-------", store.getState() % 2 === 0);
      next(action);
    };
  };
}
