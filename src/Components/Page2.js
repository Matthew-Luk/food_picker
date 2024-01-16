import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/styles.scss'

const Page2 = (props) => {
  const {setEggsAndRice}= props
  const navigate = useNavigate()

  const page2ClickYes = (e) => {
    setEggsAndRice(true)
    navigate('/eggs_noodles')
  }

  const page2ClickNo = (e) => {
    setEggsAndRice(false)
    navigate('/eggs_noodles')
  }

  return (
    <div className='page'>
      <div className='header'>
        <p>Do you have eggs and rice?</p>
      </div>
      <div className='content'>
        <div onClick={page2ClickYes} className='card eggsAndRice'>
          <p className='blackFont'>YES</p>
        </div>
        <div onClick={page2ClickNo} className='card instantNoodles'>
          <p className='blackFont'>NO</p>
        </div>
      </div>
    </div>
  )
}

export default Page2