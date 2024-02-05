import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/styles.scss'

const Page3 = (props) => {
  const {setOrderOrSleep} = props
  const navigate = useNavigate()

  const page3ClickYes = () => {
    setOrderOrSleep(true)
    navigate('/order_sleep')
  }

  const page3ClickNo = () => {
    setOrderOrSleep(false)
    navigate('/order_sleep')
  }

  return (
    <div className='page'>
      <div className='header'>
        <p>Is it too late to order food?</p>
      </div>
      <div className='content'>
        <div onClick={page3ClickYes} className='card night'>
          <p>YES</p>
        </div>
        <div onClick={page3ClickNo} className='card day'>
          <p>NO</p>
        </div>
      </div>
    </div>
  )
}

export default Page3