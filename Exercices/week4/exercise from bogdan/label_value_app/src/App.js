import React, { useState } from "react";

import LabelValue from "./components/LabelValueComponent/LabelValue";
import "./App.css";

const App = () => {
  const [label, setLabel] = useState("IQ personal: ");
  const [value1, setValue1] = useState(190);
  const [value2, setValue2] = useState(0);

  const onChangeInput = (event) => {
    setLabel(event.target.value);
  };

  const onIncrement = () => {
    setValue1(value1 + 1);
    setValue2(value2 + 1);
  };

  const onDecrement = () => {
    setValue1(value1 - 1);
    setValue2(value2 - 1);
  };

  return (
    <div className="App">
      <input type="text" onChange={onChangeInput} value={label} />
      <LabelValue label={label} value={value1} />

      <LabelValue label={label} value={value2} />
      <div className="buttons-wrapper">
        <button className="increment-btn" onClick={onIncrement}>
          +
        </button>
        <button className="decrement-btn" onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
