/**
 * /src/component/CountUI.js
 *
 * this is a Count component that uses the store
 */
import React, { Component } from "react";
//import connect from react-redux
import { connect } from "react-redux";

//import the actions
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementOddAction
} from "../redux/count_actions";

class CountUI extends Component {
  //add
  increment = () => {
    //get the selected value
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };
  //substract
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };

  //add when the sum is odd
  incrementIfOdd = () => {
    //get the selected value
    const { value } = this.selectNumber;
    this.props.incrementIfOdd(value * 1);
  };

  render() {
    return (
      <div>
        {/* store.getState() get the current state value */}
        <h1>Sum：{this.props.counter}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.incrementIfOdd}>Add when sum is odd</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (number) => dispatch(createIncrementAction(number)),
    decrement: (number) => dispatch(createDecrementAction(number)),
    incrementIfOdd: (number) => dispatch(createIncrementOddAction(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
