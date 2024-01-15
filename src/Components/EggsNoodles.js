import React from 'react';
import '../scss/styles.scss';
import friedEggs from '../images/friedeggandrice.jpeg';
import eggFriedRice from '../images/eggfriedrice.jpeg';
import eggSandwich from '../images/eggsandwich.jpeg';
import carbonara from '../images/eggcarbonara.jpeg';
import stirFriedMama from '../images/stirfriedmama.jpeg';
import riceAndMeat from '../images/riceandmeat.jpeg';
import spicyNoodlesEggs from '../images/spicynoodleseggs.jpeg';
import baconRice from '../images/baconrice.jpeg';
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
    },
    {
      imageSrc: eggSandwich,
      name: "Fried egg sandwich",
    },
    {
      imageSrc: baconRice,
      name: "Bacon and rice",
    },
    {
      imageSrc: carbonara,
      name: "Lazy egg carbonara",
    },
    {
      imageSrc: stirFriedMama,
      name: "Stir fried mama with egg",
    },
    {
      imageSrc: spicyNoodlesEggs,
      name: "Spicy noodles with egg",
    },
    {
      imageSrc: riceAndMeat,
      name: "Rice and meat",
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
                  <p className='dishName'>Name: {item.name}</p>
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
                  <p>Name: {item.name}</p>
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