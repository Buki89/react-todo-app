import { firebase, googleAuthProvider } from "../../firebase/firebase";

// TODO: types -> enum
export const login = (uid: string) => ({
  type: "LOGIN",
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
