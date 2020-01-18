import { AuthState } from "../types";
import { AuthAction, Action } from "../types";

const initialState: AuthState = {
  uid: "",
  error: ""
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case AuthAction.login:
      return {
        uid: action.uid,
        error: ""
      };
    case AuthAction.logout:
      return {};
    case AuthAction.loginError:
      return {
        ...state,
        error: "Login failed"
      };
    default:
      return state;
  }
};
