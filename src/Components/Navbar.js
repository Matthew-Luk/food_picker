import React from 'react'
import '../scss/styles.scss'
import { useNavigate } from 'react-router-dom';
import { PiBowlFoodDuotone } from "react-icons/pi";
import { VscDebugRestart } from "react-icons/vsc";

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
      <button onClick={restartHandler}>Restart <VscDebugRestart size={"2.4rem"} color={'#bfd2c1'}/></button>
    </div>
  )
}

export default Navbar