import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  function increment() {
    setcount(count + 1);
  }

  function decrement() {
    setcount(count - 1);
    if (count === 0) {
      setcount(0);
    }
  }

  function reset() {
    setcount(0);
  }

  return (
    <>
    <div className="continer">
      <h2>Counter App</h2>
      <p>count: {count}</p>

      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄️ Reset</button>
      </div>
    </>
  );
}

export default App;
