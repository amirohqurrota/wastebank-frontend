import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDp3OeyB7r9aW7QzVdRRwecpW4gKaxkwYQ",
    authDomain: "wastebankproject.firebaseapp.com",
    projectId: "wastebankproject",
    storageBucket: "wastebankproject.appspot.com",
    messagingSenderId: "68610367246",
    appId: "1:68610367246:web:5d29f07ae1a3cb7e55c15f",
    measurementId: "G-889076MX1R"
  };


export const app=initializeApp(firebaseConfig)
export const storage=getStorage(app)