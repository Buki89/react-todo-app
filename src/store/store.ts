import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import tasks from "./reducers/taskReducers";
import auth from "./reducers/authReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ tasks, auth }),
  compose(composeWithDevTools(applyMiddleware(thunk)))
);

export default store;
