import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from "./Firebase";
 export const userAuthContext=createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser]=useState("")
        function SignUp(email,password){
            return createUserWithEmailAndPassword(auth,email,password)
        }
        function LogIn(email,password){
            return signInWithEmailAndPassword(auth,email,password)
        }
        function GooglesignIn(){
            const googleAuthProvider=new GoogleAuthProvider()
            return signInWithPopup(auth,googleAuthProvider)
        }
        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
            });
            return ()=>{
                unsubscribe()
            }
        },[]);
    return(<userAuthContext.Provider value={{user,SignUp,LogIn,GooglesignIn}}>{children}</userAuthContext.Provider>)
}

export function useUserAuth(){
    return useContext(userAuthContext)
}