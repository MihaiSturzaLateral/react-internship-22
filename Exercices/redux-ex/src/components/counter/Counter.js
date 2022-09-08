import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counter } from "../../redux/actions/countActions";
import "./Counter.css";

const Counter = () => {
  const storeCounter = useSelector((state) => state.number);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("");

  return (
    <div className="container">
      <span className="display">Count Value: {storeCounter}</span>
      <div className="btnDiv">
        <input
          className="input"
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(counter(incrementAmount))}
        >
          Submit Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
