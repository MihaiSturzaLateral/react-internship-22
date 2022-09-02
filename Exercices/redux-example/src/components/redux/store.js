import { createStore,compose,applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cakeReducer, composeEnhancers(applyMiddleware()));

export default store;