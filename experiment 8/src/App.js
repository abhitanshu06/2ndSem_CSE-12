import { useState } from "react";
import "./App.css";

function App() {

  // count state
  const [count, setCount] = useState(0);

  // increment function
  const increment = () => {
    setCount(count + 1);
  };

  // decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <h1>Counter Application</h1>

      {/* display counter value */}
      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <button onClick={reset}>
        Reset
      </button>

    </div>
  );
}

export default App;