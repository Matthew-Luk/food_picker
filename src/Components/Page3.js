import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/styles.scss'

const Page3 = () => {
  const navigate = useNavigate()

  const page2ClickYes = (e) => {

    navigate('/order_sleep')
  }

  const page2ClickNo = (e) => {

    navigate('/order_sleep')
  }

  return (
    <div className='page'>
      <div className='header'>
        <p>Is it too late to order food?</p>
      </div>
      <div className='content'>
        <div onClick={page2ClickYes} className='card'>
          <p className='blackFont'>YES</p>
        </div>
        <div onClick={page2ClickNo} className='card'>
          <p className='blackFont'>NO</p>
        </div>
      </div>
    </div>
  )
}

export default Page3