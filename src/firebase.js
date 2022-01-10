import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3GGkUE3wqn3gLHbIuERZASGSW9l8wPS0",
  authDomain: "slack-clone-bd9af.firebaseapp.com",
  projectId: "slack-clone-bd9af",
  storageBucket: "slack-clone-bd9af.appspot.com",
  messagingSenderId: "292034174759",
  appId: "1:292034174759:web:229d052167796622be5302",
  measurementId: "G-XB0TCFXM07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

