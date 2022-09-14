import React, { useContext, useState, useEffect } from "react"
import { auth } from '../firebase-config'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(()  => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    
  )
}
