import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import tasks from "./reducers/task";
import auth from "./reducers/auth";
import filter from "./reducers/filter";

const reducers = combineReducers({ tasks, auth, filter });
const enhancer = compose(composeWithDevTools(applyMiddleware(thunk)));

const store = createStore(reducers, enhancer);

export default store;
