import { useState } from "react";
import { count } from "./action";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const numberDis = useSelector((state) => state.countValue);
  return (
    <div className="App">
      <div>value:{parseInt(numberDis)}</div>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button
        type="button"
        onClick={() => {
          dispatch(count(number));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
