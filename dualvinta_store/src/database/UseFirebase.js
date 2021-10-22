import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBWIDUtXTFLOzS5CETrltFkRqEttKLR7g8",
  authDomain: "dualvinta-store.firebaseapp.com",
  projectId: "dualvinta-store",
  storageBucket: "dualvinta-store.appspot.com",
  messagingSenderId: "896958220855",
  appId: "1:896958220855:web:c81eed05c7c5ac5cf90db2"
};

//Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;