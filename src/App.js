import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Counter from "./components/Counter";
import { reducer, initialState, actions } from "./store";

const apiPath = "http://localhost:5000/random";

async function fetchRandom(dispatch) {
  try {
    const { data } = await axios.get(apiPath);
    dispatch({ type: actions.set, payload: data.value });
  } catch (e) {
    console.error(`Error fetching from ${apiPath}`, e);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchRandom(dispatch);
  }, []);

  return (
    <div className="App">
      <Counter value={state} {...{ dispatch, fetchRandom }} />
    </div>
  );
}

export default App;
