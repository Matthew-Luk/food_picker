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
import { ImSleepy } from "react-icons/im";
import { GiNightSleep } from "react-icons/gi";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";

const OrderSleep = (props) => {
  const {orderOrSleep} = props

  const restaurants = [
    {
      imageSrc: jollibee,
      name: "Jollibee",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: bunRieu,
      name: "Bun Rieu",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: kapoon,
      name: "Kapoon",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: goldenDragon,
      name: "Golden Dragon",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: porkChop,
      name: "Pork chop with red rice",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: fireWings,
      name: "Firewings",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: torta,
      name: "Torta",
      distance: "5 miles",
      attributes: [""]
    },
    {
      imageSrc: churchsChicken,
      name: "Church's Chicken",
      distance: "5 miles",
      attributes: [""]
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
        <div className='resultPageContent'>

        </div>
      </div>
      :
      <div className='resultPage'>
        <div className='resultPageHeader'>
          <MdOutlineTakeoutDining color={'#bfd2c1'}/>
          <p>Today we're ordering takeout.</p>
          <MdOutlineFoodBank color={'#bfd2c1'}/>
        </div>
        <CardList list={restaurants}/>
      </div>
      }
    </div>
  )
}

export default OrderSleep