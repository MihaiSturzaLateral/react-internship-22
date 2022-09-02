import { createStore,compose,applyMiddleware } from "redux";
import countReducer from "./countReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(countReducer, composeEnhancers(applyMiddleware()));

export default store;
