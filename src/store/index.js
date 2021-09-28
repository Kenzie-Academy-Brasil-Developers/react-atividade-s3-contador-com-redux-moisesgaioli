import { combineReducers, createStore } from "redux";
import counteReducer from "./counter/reducer";


const reducers = combineReducers({ result: counteReducer});

const store = createStore(reducers);

export default store;