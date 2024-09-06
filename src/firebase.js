import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC01x-F0CJxrDtuNyirbKJO5sCUzZ9aLsw",
    authDomain: "learning-firebase-26b95.firebaseapp.com",
    projectId: "learning-firebase-26b95",
    storageBucket: "learning-firebase-26b95.appspot.com",
    messagingSenderId: "162663245153",
    appId: "1:162663245153:web:9e3bdf3be00bd2ecf99120",
    databaseURL : "https://learning-firebase-26b95-default-rtdb.firebaseio.com/",
  };

const app = initializeApp(firebaseConfig);

export default app;