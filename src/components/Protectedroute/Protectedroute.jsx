import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Protectedroute = () => {
    
    const bringBackToken = localStorage.getItem("token")
console.log(bringBackToken)

    return  bringBackToken ? <Outlet/> : <Navigate to='/login'/>
   
}
export default Protectedroute
// in protected route js file dont write jsx code its pure function only but return ismandatory 
// b cuz we can acces another place 
