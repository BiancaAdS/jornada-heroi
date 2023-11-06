import React, { useContext } from "react"

import { AuthContext } from "./AuthContex"

import { InitialPage } from "../../pages/InitialPage"

export const AuthRequire = ({ children }) => {

    const {userDetails} = useContext(AuthContext)
   
    if (!userDetails.username) {
        return <InitialPage />
    }

    return children;

}