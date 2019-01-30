/*
 * @Author: Nate
 * @Date:   2019-01-30 09:13:39
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-30 10:19:48
 */
import React, { useReducer } from "react";

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container max-w-sm mx-auto p-4 m-2 bg-teal-lightest shadow-lg rounded text-center text-orange font-bold">
      count: {state.count}
      <button
        className="container mx-auto"
        onClick={() => dispatch({ type: "increment" })}
      >
        increment
      </button>
      <button
        className="container mx-auto"
        onClick={() => dispatch({ type: "decrement" })}
      >
        decrement
      </button>
      <button
        className="container mx-auto"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
    </div>
  );
}
