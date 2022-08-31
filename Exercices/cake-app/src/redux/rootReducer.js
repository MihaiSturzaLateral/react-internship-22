import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './icecream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;