import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKCwdostIF3MnoODfnyld-koUzFnfEGDU",
    authDomain: "oopproject-1005b.firebaseapp.com",
    projectId: "oopproject-1005b",
    storageBucket: "oopproject-1005b.appspot.com",
    messagingSenderId: "682926464711",
    appId: "1:682926464711:web:8422916e4aeea007e4a8e2",
    measurementId: "G-NFLGYG9T8D"
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


    