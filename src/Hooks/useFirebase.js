import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, setIsLoading } from '../features/isloadingSlice';
import { login, selectUser } from '../features/userSlice';
import initAuth from '../Firebase/initAuth';

initAuth();

export const useFirebase = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);

    const signWithGoogle = () => {
        dispatch(setIsLoading(true));
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(authUser => {
                dispatch(login({ ...authUser.user }));
            }).catch(error => alert(error.message))
            .finally(() => dispatch(setIsLoading(false)))
    }

    const userRegister = (name, photoURL, email, password) => {
        dispatch(setIsLoading(true));
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL
                }).then(() => { })
                dispatch(login({ displayName: name, email, photoURL }))
            }).catch(error => alert(error.message))
            .finally(() => dispatch(setIsLoading(false)))
    }

    const logIn = (email, password) => {
        dispatch(setIsLoading(true));
        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                dispatch(login({ ...userAuth?.user }));
            }).catch(error => alert(error.message))
            .finally(() => dispatch(setIsLoading(false)))
    }

    const logOut = () => {
        dispatch(setIsLoading(true));
        signOut(auth)
            .then(() => {
                dispatch(login({}))
            }).catch(error => alert(error.message))
            .finally(() => dispatch(setIsLoading(false)))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch(setIsLoading(true));
            if (user) {
                dispatch(login({ ...user }))
                dispatch(setIsLoading(false));
            }
            else {
                dispatch(login({}))
                dispatch(setIsLoading(false));
            }
        })
        return () => unsubscribe;
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