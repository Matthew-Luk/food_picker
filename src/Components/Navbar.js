import React from 'react'
import '../scss/styles.scss'
import { useNavigate } from 'react-router-dom';
import { PiBowlFoodDuotone } from "react-icons/pi";

const Navbar = () => {
  const navigate = useNavigate()

  const restartHandler = (e) => {
    e.preventDefault()
    console.log("Sending to home")
    navigate('/home')
  }

  return (
    <div className='navbar'>
      <div className='navbarLeft'>
        <PiBowlFoodDuotone size={"4.8rem"} color={'#fff'}/>
        <p>What Should I Eat Today?</p>
      </div>
      <button onClick={restartHandler}>Restart</button>
    </div>
  )
}

export default Navbar