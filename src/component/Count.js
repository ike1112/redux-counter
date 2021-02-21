/**
 * /src/component/Count.js
 *
 * this is a Count component that uses the store
 */
import React, { Component } from "react";
//import the store
import store from "../redux/store";
//import the actions
import {
  createIncrementAction,
  createDecrementAction
} from "../redux/count_actions";

export default class Count extends Component {
  //add
  increment = () => {
    //get the selected value
    const { value } = this.selectNumber;
    //dispatch an action to update the state value
    store.dispatch(createIncrementAction(value * 1));
  };
  //substract
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };

  render() {
    return (
      <div>
        {/* store.getState() get the current state value */}
        <h1>Sum：{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
      </div>
    );
  }
}
