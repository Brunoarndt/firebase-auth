import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAYiZXTvYo6tGhlS6R6yNAeH1Pvk4u7cXI",
    authDomain: "auth-firebase-905ea.firebaseapp.com",
    projectId: "auth-firebase-905ea",
    storageBucket: "auth-firebase-905ea.appspot.com",
    messagingSenderId: "322473922035",
    appId: "1:322473922035:web:8191baf476272a358ad686"
  };

  // eslint-disable-next-line no-unused-vars
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);