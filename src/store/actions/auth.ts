import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { AuthAction, ThunkResult, Action } from "../../types/types";
import { Dispatch } from "redux";

export const login = (uid: string): Action => ({
  type: AuthAction.login,
  uid
});

export const startLogin = (): ThunkResult<void> => {
  return (dispatch: Dispatch) => {
    return firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(result => dispatch(login(result.user.uid)))
      .catch(error => {
        dispatch(loginError());
        console.log(error);
      });
  };
};

export const logout = (): Action => ({
  type: AuthAction.logout
});

export const startLogout = (): ThunkResult<void> => {
  return (dispatch: Dispatch) => {
    return firebase
      .auth()
      .signOut()
      .then(() => dispatch(logout()))
      .catch(error => console.log(error));
  };
};

export const loginError = (): Action => ({
  type: AuthAction.loginError
});

export const autoLogin = (): ThunkResult<void> => {
  return (dispatch: Dispatch) => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(login(user.uid));
      }
    });
  };
};
