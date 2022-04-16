// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwX51gVaddEYtXZ2BlJ4DIUcyQumNSYo",
  authDomain: "mr-tutor-e4f3b.firebaseapp.com",
  projectId: "mr-tutor-e4f3b",
  storageBucket: "mr-tutor-e4f3b.appspot.com",
  messagingSenderId: "83097553396",
  appId: "1:83097553396:web:c98b3340bcb4ca0fd291a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
