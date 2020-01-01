import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDAqAquKbY5piajJMHwm2_tYx56aCHvilg",
  authDomain: "quotes-firebase.firebaseapp.com",
  databaseURL: "https://quotes-firebase.firebaseio.com",
  projectId: "quotes-firebase",
  storageBucket: "quotes-firebase.appspot.com",
  messagingSenderId: "193407235862",
  appId: "1:193407235862:web:9fc197f1dd9d2a2b288237"
  // measurementId: "G-4DN3WHRXXZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
