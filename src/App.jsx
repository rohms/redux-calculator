import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice.jsx";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <h2>Counter using Redux Toolkit</h2>
        <h1>{count}</h1>
        <div className="btns-container">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <button className="reset-btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
