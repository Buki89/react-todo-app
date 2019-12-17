import { AuthState } from "../../types/types";
import { AuthAction } from "../../types/types";

// TODO: AuthAction

const initialState: AuthState = {
  uid: ""
};

// TODO: action type
export default (state = initialState, action) => {
  switch (action.type) {
    case AuthAction.login:
      return {
        uid: action.uid
      };
    case AuthAction.logout:
      return {};
    default:
      return state;
  }
};
