import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import initAuth from '../../Firebase/initAuth';

initAuth();

export const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const signWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(authUser => {
                setUser(authUser.user);
            }).catch(error => alert(error.message))
    }

    const userRegister = (displayName, photoURL, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName, photoURL
                }).then(() => {
                    dispatch(login({ email, displayName, photoURL }))
                }).catch(error => alert(error.message));
            }).catch(error => alert(error.message))
    }

    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                dispatch(login({ ...userAuth?.user }));
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