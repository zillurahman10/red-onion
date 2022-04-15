import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAxZSCJKUqa4-CwYmuUpY2qQSbebJB7bJo",
    authDomain: "red-onion-5e2bb.firebaseapp.com",
    projectId: "red-onion-5e2bb",
    storageBucket: "red-onion-5e2bb.appspot.com",
    messagingSenderId: "840615146951",
    appId: "1:840615146951:web:0a491d91e647a0910cd5e2",
    measurementId: "G-WBV68PY31E"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;