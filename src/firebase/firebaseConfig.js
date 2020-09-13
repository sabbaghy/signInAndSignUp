import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
   const firebaseConfig = {
      apiKey: "AIzaSyDIAtlKUVPAVf91GrrWL1U8ztAm8mrZH24",
      authDomain: "taguara-digital-portfolio.firebaseapp.com",
      databaseURL: "https://taguara-digital-portfolio.firebaseio.com",
      projectId: "taguara-digital-portfolio",
      storageBucket: "taguara-digital-portfolio.appspot.com",
      messagingSenderId: "768996275583",
      appId: "1:768996275583:web:8988961fadae89602c164a"
   };

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// always prompt for google auth when using this provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  return await auth.signInWithPopup(googleProvider);
};

export default firebase;