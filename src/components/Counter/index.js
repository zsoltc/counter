import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { actions } from "../../store";

function Counter({ value, dispatch, fetchRandom }) {
  return (
    <div className="counter">
      <div className="value-box">{value}</div>
      <button onClick={() => dispatch({ type: actions.dec })}>-</button>
      <button onClick={() => dispatch({ type: actions.inc })}>+</button>
      <button onClick={() => fetchRandom(dispatch)}>Reroll</button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  fetchRandom: PropTypes.func.isRequired
};

export default Counter;
