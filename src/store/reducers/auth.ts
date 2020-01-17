import { AuthState } from "../types";
import { AuthAction } from "../types";

// TODO: AuthAction

const initialState: AuthState = {
  uid: "",
  error: ""
};

// TODO: action type
export default (state = initialState, action) => {
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
