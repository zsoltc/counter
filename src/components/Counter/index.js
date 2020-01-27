import React from "react";
import "./index.css";
import { actions } from "../../store";

function Counter({ value, dispatch, min, max }) {
  return (
    <div className="counter">
      <div className="value-box">{value}</div>
      <button onClick={() => dispatch(actions.dec)}>-</button>
      <button onClick={() => dispatch(actions.inc)}>+</button>
      <button onClick={() => {}}>Reroll</button>
    </div>
  );
}

export default Counter;
