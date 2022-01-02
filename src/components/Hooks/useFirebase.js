import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { firebaseConfig } from '../../Firebase/FirebaseConfig'


initializeApp(firebaseConfig);

export const useFirebase = () => {
    const auth = getAuth();
    return {

    }
}