
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter(counter + 1);
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{counter}</h1>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
}
