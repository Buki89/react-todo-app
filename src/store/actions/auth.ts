import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { AuthAction } from "../../types/types";

export const login = (uid: string) => ({
  type: AuthAction.login,
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: AuthAction.logout
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
