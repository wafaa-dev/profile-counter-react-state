import React, { useState } from "react";
import './App.css';
import Profile from './component/profile'; 


const userProfile={
textAlign:'center',
color : 'grey',
}

 const visibilityB={
  backgroundColor: '#83CB9A',
  color:'white',
  border:'transparent' ,
  padding:'10px 15px',
  fontSize: 'large',
  borderRadius:'8px',
}

export default function App() {
   const [show, setShow] = useState(false);

    return (

<div className="userProfile" style= {userProfile}>
 
  <button className="visibilityB" style={visibilityB} onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>
       {show && <Profile />}

       
  </div>
    )

    }               
  

