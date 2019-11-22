import { createStore } from "redux";
import todoApp from "./reducers/taskReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(todoApp, composeWithDevTools());

export default store;
