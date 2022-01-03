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

    const userRegister = (name, photoURL, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(auth.currentUser);
                updateProfile(auth.currentUser, {
                    photoURL, displayName: name
                }).then(() => {
                    dispatch(login({ displayName: name, email, photoURL }))
                })
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
                dispatch(login({}))
            }).catch(error => alert(error.message))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login({ ...user }))
            }
            else {
                dispatch(login({}))
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