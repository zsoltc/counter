import React, { useReducer, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { reducer, initialState } from "./store";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Counter value={state} dispatch={dispatch} min={0} max={10} />
    </div>
  );
}

export default App;
