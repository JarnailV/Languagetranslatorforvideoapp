import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage";



const app = firebase.initializeApp({
  apiKey: "AIzaSyDOiog0S2ReUT-EmujNVCvdSXclxJId9Nk",
  authDomain: "video-translator-5d580.firebaseapp.com",
  projectId: "video-translator-5d580",
  storageBucket: "video-translator-5d580.appspot.com",
  messagingSenderId: "720180229435",
  appId: "1:720180229435:web:9c7112fb75de27dde8731e",
  measurementId: "G-HXHY3G8WVV"
})

export const auth = app.auth()
const storage = firebase.storage();

export { app, storage, firebase as default };

