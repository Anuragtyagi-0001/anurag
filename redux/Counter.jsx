import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Count: {count}</h1>

      <button
        onClick={() => dispatch({ type: "ADD" })}
        style={{ padding: "10px 20px" }}
      >
        Add +1
      </button>
    </div>
  );
}

export default App;