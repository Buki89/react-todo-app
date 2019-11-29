import { createStore, applyMiddleware, compose } from "redux";
import todoApp from "./reducers/taskReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  todoApp,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);

export default store;
