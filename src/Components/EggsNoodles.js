import React from 'react'
import '../scss/styles.scss'
import { GiFriedEggs } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import { CiBowlNoodles } from "react-icons/ci";
import { LuMicrowave } from "react-icons/lu";

const EggsNoodles = (props) => {
  const { eggs } = props

  return (
    <div>
      { eggs
        ?<div className='resultPage'>
          <div className='resultPageHeader'>
            <p>Today we're having eggs or rice.</p>
            <GiFriedEggs color='#bfd2c1'/>
            <BiBowlRice color='#bfd2c1'/>
          </div>
          <div className='resultPageContent'>

          </div>
        </div>
        :<div className='resultPage'>
          <div className='resultPageHeader'>
            <p>Today we're having instant noodles or frozen meals.</p>
            <CiBowlNoodles color='#bfd2c1'/>
            <LuMicrowave color='#bfd2c1'/>
          </div>
          <div className='resultPageContent'>

          </div>
        </div>
      }
    </div>
  )
}

export default EggsNoodles