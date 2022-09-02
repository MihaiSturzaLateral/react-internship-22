import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { count } from "./redux/actionCount";

const CountContainer = () => {
  const numberVal = useSelector((state) => state.number);
  const dispatch = useDispatch();
  const [stateValue, setStateValue] = useState();
  return (
    <div>
      countValue: {numberVal}
     
      <input
        type="number"
        onChange={(e) => setStateValue(e.target.value)}
      ></input>
       <button onClick={() => dispatch(count(stateValue))}>Submit</button>
    </div>
  );
};

export default CountContainer;
