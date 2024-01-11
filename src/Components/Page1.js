import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/styles2.scss'

const Page1 = () => {
  const navigate = useNavigate()

  const page1ClickYes = (e) => {
    e.preventDefault()
    navigate('/page2')
  }

  const page1ClickNo = (e) => {
    e.preventDefault()
    navigate('/page3')
  }

  return (
    <div className='page'>
      <div className='header'>
        <p>Do you have food at home?</p>
      </div>
      <div className='content'>
        <div onClick={page1ClickYes} className='card'>
          <p>Yes</p>
        </div>
        <div onClick={page1ClickNo} className='card'>
          <p>No</p>
        </div>
      </div>
    </div>
  )
}

export default Page1