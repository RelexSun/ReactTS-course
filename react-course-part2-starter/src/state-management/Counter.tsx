import { useState, useReducer } from "react";
import CounterReducer from "./reducers/CounterReducer";

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [value, dispatch] = useReducer(CounterReducer, 0);
  // Dispatch = setValue

  return (
    <div>
      Counter ({value})
      <button
        // onClick={() => setValue(value + 1)}
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
