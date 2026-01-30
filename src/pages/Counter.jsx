import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="counter-box">
        <p className="counter-label">Counter</p>

        <div className="counter-value">{count}</div>

        <div className="counter-actions">
          <button
            className="counter-btn"
            onClick={() => setCount(count - 1)}
          >
            −
          </button>

          <button
            className="counter-btn reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="counter-btn"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
