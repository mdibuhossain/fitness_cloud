import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import { firebaseConfig } from '../../Firebase/FirebaseConfig'


initializeApp(firebaseConfig);

export const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const signWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(authUser => {
                setUser(authUser.user);
            }).catch(error => alert(error.message))
    }

    const userRegister = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser({
                    email, displayName: name
                })
            }).catch(error => alert(error.message))
    }

    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                setUser(userAuth.user);
            }).catch(error => alert(error.message))
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch(error => alert(error.message))
    }

    return {
        user,
        logIn,
        logOut,
        isLoading,
        userRegister,
        signWithGoogle,
    }
}