import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase"
import firebase from "firebase/app"
import "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function setPersistanceSession(email, password) {
    auth().setPersistanceSession(auth.AUTH.Persistance.SESSION)
    .then(() => {
      return auth().signInWithEmailAndPassword(email, password);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message 
    })
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    setPersistanceSession
  }

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}
