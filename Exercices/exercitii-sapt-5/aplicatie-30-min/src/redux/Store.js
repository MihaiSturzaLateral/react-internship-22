import { counterReducer } from "./Reducer";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(counterReducer, composeEnhancers(applyMiddleware()));

export default store;
