import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({children}) => {
    const [user, setUser]= useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current user inside',currentUser)
            setUser(currentUser);
        });
        return () => unSubscribe();
    },[])

    const authInfo ={user, createUser, signIn, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;