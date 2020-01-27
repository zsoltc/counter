import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Counter from "./components/Counter";
import { reducer, initialState, actions } from "./store";

const apiPath = "http://localhost:5000/random";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(apiPath);
      dispatch({ type: actions.set, payload: data.value });
    })();
  }, []);

  return (
    <div className="App">
      <Counter value={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
