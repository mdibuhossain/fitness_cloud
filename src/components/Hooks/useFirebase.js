import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/userSlice';
import initAuth from '../../Firebase/initAuth';

initAuth();

export const useFirebase = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [isLoading, setIsLoading] = useState(false);

    const signWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(authUser => {
                dispatch(login({ ...authUser.user }));
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
                dispatch(login({}));
            }).catch(error => alert(error.message))
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login({ ...user }))
            }
            else {
                dispatch(login({}))
            }
        })
    }, [auth])

    return {
        user,
        logIn,
        logOut,
        isLoading,
        userRegister,
        signWithGoogle,
    }
}