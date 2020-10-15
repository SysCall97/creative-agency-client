import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMjGWMvXIy7wX2u6t8-pRKcsVgOLdXNaA",
  authDomain: "creative-agency-by-mashry.firebaseapp.com",
  databaseURL: "https://creative-agency-by-mashry.firebaseio.com",
  projectId: "creative-agency-by-mashry",
  storageBucket: "creative-agency-by-mashry.appspot.com",
  messagingSenderId: "493175987058",
  appId: "1:493175987058:web:2b7a6e7bf55db864685beb"
};

export const initializeSigninFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const newUser = {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
        isLoggedIn: true,
        error: ""
      }
      
      return newUser;
    })
    .catch(error => {
      const newUserInfo = {
        loggedIn: false,
        error: error.message,
      };
      newUserInfo.isLoggedIn = false;
      return newUserInfo;
    });
}

export const signOut = () => {
  firebase.auth().signOut();
}