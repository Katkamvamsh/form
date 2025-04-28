import React, { Fragment, useState } from 'react'
import './CreditCard.css'
import data from '../../assets/assets'
import { useNavigate } from "react-router-dom";

const CreditCard = () => {
   const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [email, setEmail] = useState('');
  const [popEmail,setPopEmail]=useState("")
  

  const handleSend = () => {
    if (!popEmail) {
      setPopEmail("email id is mandatory to fill");
      return; 
    }
     setShowPopup(false);
  };
 
  const logoutHandler=()=>{
    alert("logout button clicked")
    localStorage.removeItem("token");

    alert("Logout is successfully completed")
    alert("token is successfully removed")
    console.log("token Removed")
    navigate('/login')

  }

  const handleCancel = () => {
    setShowPopup(false);
  };
  

  return (
    <Fragment>
      <button onClick={logoutHandler} className='logout'>Logout</button>
      <div className='main-container'>

     {showPopup && (      
          <div className="popup-box">
            <h2 className='enter-email'>Enter your Email</h2>
            <input
            className='pop-input'
              type="email"
              placeholder="Enter your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{popEmail}</p>
            <div className="popup-buttons">
              <button className='send-button' onClick={handleSend}>Send</button>
              <button  className='cancel-button' onClick={handleCancel}>Cancel</button>
            </div>
         
        </div>
      )}
     {
      data.map((item,index)=>{
        return <div key={index} className='each-card'>
          <img className='image' src={item.image} alt="" />      
      <h3 className='number'>{item.name}</h3>
      <h1 className='name'>{item.cardNumber}</h1>
      <p className='date'>{item.date}</p>
      </div>
           
      })
     } 
  </div>
  </Fragment>
  )
}

export default CreditCard
