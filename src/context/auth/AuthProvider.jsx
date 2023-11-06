import React, { useEffect, useState } from "react"

import { AuthContext } from "./AuthContex"

export const AuthProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const validateData = async () => {
            const storageData = localStorage.getItem('userDetails')
            if (storageData) {
                setUserDetails(JSON.parse(storageData))
            }
        }
        validateData()
      }, []);

    const handleLogin = (username) => {
        setUserDetails({ username })
        localStorage.setItem('userDetails', JSON.stringify({ username }))
    }

    const handleLogout = () => {
        setUserDetails({})
        localStorage.removeItem('userDetails')
    }
    
    return (
        <AuthContext.Provider value={{userDetails, handleLogin, handleLogout}}>
          {children}
        </AuthContext.Provider>
    )
}

