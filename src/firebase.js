import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})



export const auth = app.auth()
export default app


// apiKey: "AIzaSyBOGq8jCYuDRJzk9KpCWmAd77h0X8GUdEU",
// authDomain: "advizer-development.firebaseapp.com",
// projectId: "advizer-development",
// storageBucket: "advizer-development.appspot.com",
// messagingSenderId: "928336142809",
// appId: "1:928336142809:web:c9904f29a3a3267d6539c8"