import React from 'react';
import '../scss/styles.scss';
import friedEggs from '../images/fried_egg_and_rice.jpeg';
import eggFriedRice from '../images/egg_fried_rice.jpeg';
import bibigo from '../images/bibigo.jpeg';
import { GiFriedEggs } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import { CiBowlNoodles } from "react-icons/ci";
import { LuMicrowave } from "react-icons/lu";

const EggsNoodles = (props) => {
  const { eggs } = props

  const eggMeals = [
    {
      imageSrc: friedEggs,
      name: "Fried egg and rice",
    },
    {
      imageSrc: eggFriedRice,
      name: "Egg fried rice",
    }
  ]

  const frozenMeals = [
    {
      imageSrc: bibigo,
      name: "Bibigo dumplings",
    }
  ]

  console.log(eggMeals[0].name)

  return (
    <div>
      { eggs
        ?<div className='resultPage'>
          <div className='resultPageHeader'>
            <p>Today we're having eggs or rice.</p>
            <GiFriedEggs color={'#bfd2c1'}/>
            <BiBowlRice color={'#bfd2c1'}/>
          </div>
          <div className='resultPageContent'>
            {
              eggMeals.map((item,index) => (
                <div className='foodCard' key={index}>
                  <img src={item.imageSrc} alt="" />
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        :<div className='resultPage'>
          <div className='resultPageHeader'>
            <p>Today we're having instant noodles or frozen meals.</p>
            <CiBowlNoodles color={'#bfd2c1'}/>
            <LuMicrowave color={'#bfd2c1'}/>
          </div>
          <div className='resultPageContent'>
          {
              frozenMeals.map((item,index) => (
                <div className='foodCard' key={index}>
                  <img src={item.imageSrc} alt="" />
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default EggsNoodles