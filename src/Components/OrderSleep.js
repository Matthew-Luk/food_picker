import React from 'react'
import CardList from './CardList'
import jollibee from '../images/jollibee.jpeg';
import bunRieu from '../images/bunrieu.jpeg';
import kapoon from '../images/kapoon.jpeg';
import goldenDragon from '../images/goldendragon.jpeg';
import porkChop from '../images/porkchopredrice.jpeg';
import fireWings from '../images/firewings.jpeg';
import torta from '../images/torta.jpeg';
import churchsChicken from '../images/churchschicken.jpeg';
import sleeping from '../images/sleeping.jpeg';
import sleeping2 from '../images/sleeping2.jpeg';
import sleeping3 from '../images/sleeping3.jpeg';
import { ImSleepy } from "react-icons/im";
import { GiNightSleep } from "react-icons/gi";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import Random from './Random';

const OrderSleep = (props) => {
  const {orderOrSleep} = props

  const restaurants = [
    {
      imageSrc: jollibee,
      restaurantName: "Jollibee",
      dish: "Spicy chicken meal with rice and gravy",
      distance: "6 miles",
      attributes: ["Rice", "Meat", "Fried"]
    },
    {
      imageSrc: bunRieu,
      restaurantName: "Phở Xe Lua",
      dish: "Bún riêu",
      distance: "2 miles",
      attributes: ["Noodles", "Meat", "Vegetable", "Seafood"]
    },
    {
      imageSrc: kapoon,
      restaurantName: "KB's Thai Hut",
      dish: "Khao poon",
      distance: "10 miles",
      attributes: ["Noodles", "Meat", "Vegetable"]
    },
    {
      imageSrc: goldenDragon,
      restaurantName: "Golden Dragon",
      dish: "Chow mein with salt and pepper wings",
      distance: "2 miles",
      attributes: ["Noodles", "Meat", "Vegetable"]
    },
    {
      imageSrc: porkChop,
      restaurantName: "Phở Viet 2",
      dish: "Pork chop with red rice",
      distance: "8 miles",
      attributes: ["Rice", "Meat"]
    },
    {
      imageSrc: fireWings,
      restaurantName: "Firewings",
      dish: "8 piece combo with garlic noodles",
      distance: "3 miles",
      attributes: ["Meat", "Noodles", "Fried"]
    },
    {
      imageSrc: torta,
      restaurantName: "La Sabrocita",
      dish: "Carne asada torta",
      distance: "2 miles",
      attributes: ["Sandwich", "Meat"]
    },
    {
      imageSrc: churchsChicken,
      restaurantName: "Church's Chicken",
      dish: "Spicy chicken combo with mac and cheese",
      distance: "1 miles",
      attributes: ["Meat", "Fried"]
    },
  ]

  return (
    <div>
    {
      orderOrSleep
      ?
      <div className='resultPage'>
        <div className='resultPageHeader'>
          <ImSleepy color={'#bfd2c1'}/>
          <p>Today we're having sleep.</p>
          <GiNightSleep color={'#bfd2c1'}/>
        </div>
        <div className='resultPageContent2'>
          <img className='img1' src={sleeping} alt="" />
          <div>
            <img className='img2' src={sleeping2} alt="" />
            <img className='img3' src={sleeping3} alt="" />
          </div>
        </div>
      </div>
      :
      <div className='resultPage'>
        <div className='resultPageHeader'>
          <MdOutlineTakeoutDining color={'#bfd2c1'}/>
          <p>Today we're ordering takeout.</p>
          <MdOutlineFoodBank color={'#bfd2c1'}/>
        </div>
        <Random list={restaurants}/>
        <CardList list={restaurants}/>
      </div>
      }
    </div>
  )
}

export default OrderSleep