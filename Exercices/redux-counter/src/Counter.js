import React from 'react';
import {useState} from 'react';
import { add } from './actions';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const number = useSelector((state) => state.counterReducer.countValue);
  return(
    <div>
      <div>value:{number}</div>
      <input type='number' onChange={(e) => setAmount(e.target.value)}></input>
      <button type='button' onClick={() => {dispatch(add(amount))}}>Submit</button>
    </div>
  );
}

export default Counter;