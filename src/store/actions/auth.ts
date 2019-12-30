import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { AuthAction } from "../../types/types";
import { Dispatch } from "redux";

export const login = (uid: string) => ({
  type: AuthAction.login,
  uid
});

export const startLogin = () => {
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

export const logout = () => ({
  type: AuthAction.logout
});

export const startLogout = () => {
  return (dispatch: Dispatch) => {
    return firebase
      .auth()
      .signOut()
      .then(() => dispatch(logout()))
      .catch(error => console.log(error));
  };
};

export const loginError = () => ({
  type: AuthAction.loginError
});

export const autoLogin = () => {
  return (dispatch: Dispatch) => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(login(user.uid));
      }
    });
  };
};
