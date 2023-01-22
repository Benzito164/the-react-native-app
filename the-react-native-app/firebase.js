// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfcPL0kSMn1OyjZVQX6nbSnAEYgXizC5Q",
  authDomain: "reactnativeapp-88f7c.firebaseapp.com",
  projectId: "reactnativeapp-88f7c",
  storageBucket: "reactnativeapp-88f7c.appspot.com",
  messagingSenderId: "837662469677",
  appId: "1:837662469677:web:5c03f4754cb1bcc42dd2a4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();