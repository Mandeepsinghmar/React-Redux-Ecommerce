import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
