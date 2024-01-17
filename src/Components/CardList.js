import React from 'react'
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

const CardList = (props) => {
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
  }

  return (
    <div className='resultPageContent'>
      {
        list.map((item,index) => (
          <div className='foodCard' key={index}>
            <img src={item.imageSrc} alt="" />
            <div className='foodCardContent'>
              <div className='dishName'>
                <TiPencil color={'#bfd2c1'} size={"2.4rem"}/>
                {"name" in item ? <p>Name: {item.name}</p> : <p>Resaurant: {item.restaurantName}</p>}
              </div>
              <div className='dishCookTime'>
                <IoTimeOutline color={'#bfd2c1'} size={"2.4rem"}/>
                {"cookTime" in item ? <p>Cook time: {item.cookTime}</p> : <p>Distance: {item.distance}</p>}
              </div>
              <div className='attributeList'>
                <IoMdPricetags color={'#bfd2c1'} size={"2.4rem"}/>
                {
                  item.attributes.map((attribute,index) => (
                    <div className='attribute' key={index}>
                      {icons[`${attribute}`]} 
                      <p>{attribute}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CardList