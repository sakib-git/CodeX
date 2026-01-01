import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FireBase/FireBase.init';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);


const registerUser = ( email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}


const loginUser = ( email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const GoogleLogin = () => {
 return signInWithPopup(auth, provider)
}





useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
 
  })
   return () => {
      unsubscribe();
    };
}, [])

const authInfo = {
registerUser,
loginUser,
user,
GoogleLogin, 
}


  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>


};

export default AuthProvider;