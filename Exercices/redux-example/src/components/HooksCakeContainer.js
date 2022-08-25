import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { buyCake } from './redux';

const HooksCakeContainer = () => {
    const numOfCakes=useSelector(state=>state.numOfCakes);
    const dispatch=useDispatch()
    return (
        <div>
        <h2> Num of cakes - {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    );
};

export default HooksCakeContainer;