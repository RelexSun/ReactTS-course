import { useState, useReducer } from "react";
import CounterReducer from "./CounterReducer";
import useCounterStore from "./store";

const Counter = () => {
  // const [value, setValue] = useState(0);
  // const [value, dispatch] = useReducer(CounterReducer, 0);
  // Dispatch = setValue

  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button
        // onClick={() => setValue(value + 1)}
        // onClick={() => dispatch({ type: "INCREMENT" })}
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        // onClick={() => dispatch({ type: "RESET" })}
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
