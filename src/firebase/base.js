import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyBcTH2oUuJwF5sEWQYCuHXMBxyolC4t12M",
  authDomain: "course-web-app.firebaseapp.com",
  projectId: "course-web-app",
  storageBucket: "course-web-app.appspot.com",
  messagingSenderId: "746938831951",
  appId: "1:746938831951:web:5dd00c525582f802eb063a",
});

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default app;
