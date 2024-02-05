import React, { useState } from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { IoMdPricetags } from "react-icons/io";
import { IoEggOutline } from "react-icons/io5";
import { MdOutlineRiceBowl } from "react-icons/md";
import { CiFries } from "react-icons/ci";
import { TbMeat } from "react-icons/tb";
import { GiNoodleBall } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { PiCookingPot } from "react-icons/pi";
import { HiOutlineFire } from "react-icons/hi2";
import { PiLeafLight } from "react-icons/pi";
import { MdOutlineMicrowave } from "react-icons/md";
import { GiDumpling } from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";
import { IoFishOutline } from "react-icons/io5";
import { TbBowl } from "react-icons/tb";

const Random = (props) => {
  const [randomSelected, setRandomSelected] = useState(false)
  const [randInt, setRandInt] = useState("")
  const {list} = props

  const icons = {
    "Egg": <IoEggOutline />,
    "Rice": <MdOutlineRiceBowl />,
    "Pan Fried": <CiFries />,
    "Fried": <CiFries />,
    "Meat": <TbMeat />,
    "Pasta": <GiNoodleBall />,
    "Noodles": <CiBowlNoodles />,
    "Boil": <PiCookingPot />,
    "Spicy": <HiOutlineFire />,
    "Vegetable": <PiLeafLight />,
    "Microwave": <MdOutlineMicrowave />,
    "Dumplings": <GiDumpling />,
    "Sandwich": <LuSandwich />,
    "Seafood": <IoFishOutline />
  }

  const selectRandomNumber = (e) => {
    e.preventDefault()
    let x = Math.floor(Math.random() * list.length)
    if(x === randInt){
      if(x !== 0){
        x--
      }else{
        x++
      }
    }
    setRandomSelected(true)
    setRandInt(x)
  }

  return (
    <div className='random'>
      <button onClick={selectRandomNumber}>Pick for me</button>
      {
        randomSelected
        ?
        <div className='foodCard'>
        <img src={list[randInt].imageSrc} alt="" />
          <div className='foodCardContent'>
            <div className='dishName'>
              <TiPencil color={'#bfd2c1'} size={"2.4rem"}/>
              {"name" in list[randInt] ? <p>Name: {list[randInt].name}</p> : <p>Resaurant: {list[randInt].restaurantName}</p>}
            </div>
            {
              "dish" in list[randInt] 
              ?
              <div className='dishName'>
                <TbBowl color={'#bfd2c1'} size={"2.4rem"}/>
                <p>{list[randInt].dish}</p>
              </div>
              :
              ""
            }
            <div className='dishCookTime'>
              <IoTimeOutline color={'#bfd2c1'} size={"2.4rem"}/>
              {"cookTime" in list[randInt] ? <p>Cook time: {list[randInt].cookTime}</p> : <p>Distance: {list[randInt].distance}</p>}
            </div>
            <div className='attributeList'>
              <IoMdPricetags color={'#bfd2c1'} size={"2.4rem"}/>
              {
                list[randInt].attributes.map((attribute,index) => (
                  <div className='attribute' key={index}>
                    {icons[`${attribute}`]} 
                    <p>{attribute}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        :
        ""
      }
    </div>
  )
}

export default Random