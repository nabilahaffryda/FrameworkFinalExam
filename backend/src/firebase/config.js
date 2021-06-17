import firebase from "firebase/app"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCH1gY2AT38cvINuoHMGKDKZ1adQfgpfFU",
    authDomain: "uas-project-a3765.firebaseapp.com",
    databaseURL: "https://uas-project-a3765-default-rtdb.firebaseio.com",
    projectId: "uas-project-a3765",
    storageBucket: "uas-project-a3765.appspot.com",
    messagingSenderId: "207551473527",
    appId: "1:207551473527:web:41e0daf966d235d2022372",
    measurementId: "G-TX410BYMEN"
};
  
export default firebaseConfig
export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb