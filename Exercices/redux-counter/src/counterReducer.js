import {ADD} from './actions';

const INITIAL_STATE ={
  countValue: 0,
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case ADD:
        return {
          ...state,
           countValue: parseInt(state.countValue + parseInt(action.payload))
        }
      default:
        return state;
    }
  }

  export default counterReducer;

