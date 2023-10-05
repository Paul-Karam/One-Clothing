import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIp6wnAvPARhdbnfqK5Pu9rvE42U3aQoI",
    authDomain: "one-clothing-db-6188f.firebaseapp.com",
    projectId: "one-clothing-db-6188f",
    storageBucket: "one-clothing-db-6188f.appspot.com",
    messagingSenderId: "805627402936",
    appId: "1:805627402936:web:cce518d365b58bd157b24d"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
