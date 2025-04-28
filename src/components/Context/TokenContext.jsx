import React, { createContext } from "react";

const TokenContext=({children} )=>{
    localStorage.setItem("token",123456789)
    const getToken=localStorage.getItem("token")
    const TokenContext=createContext()
    return(
        <TokenContext.Provider value={getToken}>
           {children}
        </TokenContext.Provider>
    )
}
export default  TokenContext






