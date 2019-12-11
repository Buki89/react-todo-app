import { AuthState } from "../../types/types";

// TODO: AuthAction

const initialState: AuthState = {
  uid: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
