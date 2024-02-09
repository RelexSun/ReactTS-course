import React from "react";

interface ACTIONS {
  type: "INCREMENT" | "RESET";
}

const CounterReducer = (state: number, action: ACTIONS) => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state;
};

export default CounterReducer;
