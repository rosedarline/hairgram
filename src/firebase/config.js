import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDIcSrqAKy3RL05M3k9xpdMeTcCEEAh_pU",
    authDomain: "natural-hairpediagram.firebaseapp.com",
    projectId: "natural-hairpediagram",
    storageBucket: "natural-hairpediagram.appspot.com",
    messagingSenderId: "462448177360",
    appId: "1:462448177360:web:9979b4e7ef6a12aed52ed5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};
  