import React from 'react';
import '../scss/styles.scss';
import CardList from './CardList';
import friedEggs from '../images/friedeggandrice.jpeg';
import eggFriedRice from '../images/eggfriedrice.jpeg';
import eggSandwich from '../images/eggsandwich.jpeg';
import baconRice from '../images/baconrice.jpeg';
import carbonara from '../images/eggcarbonara.jpeg';
import stirFriedMama from '../images/stirfriedmama.jpeg';
import spicyNoodlesEggs from '../images/spicynoodleseggs.jpeg';
import riceAndMeat from '../images/riceandmeat.jpeg';
import bibigo from '../images/bibigo.jpeg';
import breakfastSandwich from '../images/kirklandBreakfast.jpeg'
import cajunAlfredo from '../images/tjalfredo.jpeg';
import butterChicken from '../images/tjbutterchicken.jpeg';
import chickenTikka from '../images/tjchickentikka.jpeg';
import tteokbokki from '../images/tteokbokki.jpeg';
import shinBlack from '../images/blackshin.jpeg';
import buldak from '../images/buldak.jpeg';
import buldakBlackBean from '../images/buldakblackbean.jpeg';
import buldakCarbonara from '../images/buldakcarbonara.jpeg';
import porkMama from '../images/porkmama.jpeg';
import { GiFriedEggs } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import { CiBowlNoodles } from "react-icons/ci";
import { LuMicrowave } from "react-icons/lu";

const EggsNoodles = (props) => {
  const {eggsAndRice} = props

  const eggMeals = [
    {
      imageSrc: friedEggs,
      name: "Fried egg and rice",
      cookTime: "5 min",
      attributes: ["Egg", "Rice", "Pan Fried"]
    },
    {
      imageSrc: eggFriedRice,
      name: "Egg fried rice",
      cookTime: "10 min",
      attributes: ["Egg", "Rice", "Pan Fried", "Vegetable"]
    },
    {
      imageSrc: eggSandwich,
      name: "Fried egg sandwich",
      cookTime: "5 min",
      attributes: ["Egg", "Rice", "Pan Fried"]
    },
    {
      imageSrc: baconRice,
      name: "Bacon and rice",
      cookTime: "10 min",
      attributes: ["Rice", "Pan Fried", "Meat"]
    },
    {
      imageSrc: carbonara,
      name: "Lazy egg carbonara",
      cookTime: "20 min",
      attributes: ["Egg", "Pasta", "Pan Fried", "Meat"]
    },
    {
      imageSrc: stirFriedMama,
      name: "Stir fried mama with egg",
      cookTime: "10 min",
      attributes: ["Egg", "Pan Fried", "Noodles"]
    },
    {
      imageSrc: spicyNoodlesEggs,
      name: "Spicy noodles with egg",
      cookTime: "10 min",
      attributes: ["Egg", "Boil", "Noodles", "Spicy"]
    },
    {
      imageSrc: riceAndMeat,
      name: "Rice and meat",
      cookTime: "5 min",
      attributes: ["Rice", "Meat", "Vegetable", "Pan Fried"]
    }
  ]

  const frozenMeals = [
    {
      imageSrc: bibigo,
      name: "Bibigo dumplings",
      cookTime: "10 min",
      attributes: ["Dumplings", "Meat", "Microwave"]
    },
    {
      imageSrc: buldakBlackBean,
      name: "Buldak black bean noodles",
      cookTime: "5 min",
      attributes: ["Noodles", "Spicy", "Boil"]
    },
    {
      imageSrc: breakfastSandwich,
      name: "Kirkland breakfast sandwich",
      cookTime: "5 min",
      attributes: ["Sandwich", "Egg", "Meat", "Microwave"]
    },
    {
      imageSrc: cajunAlfredo,
      name: "Trader Joe's cajun alfredo",
      cookTime: "10 min",
      attributes: ["Pasta", "Meat", "Microwave"]
    },
    {
      imageSrc: shinBlack,
      name: "Shin black",
      cookTime: "5 min",
      attributes: ["Noodles", "Spicy", "Boil"]
    },
    {
      imageSrc: butterChicken,
      name: "Trader Joe's butter chicken",
      cookTime: "5 min",
      attributes: ["Rice", "Meat", "Microwave"]
    },
    {
      imageSrc: chickenTikka,
      name: "Trader Joe's chicken tikka masala",
      cookTime: "5 min",
      attributes: ["Rice", "Meat", "Microwave"]
    },
    {
      imageSrc: tteokbokki,
      name: "Cheese filled tteokbokki",
      cookTime: "10 min",
      attributes: ["Rice", "Cheese", "Microwave"]
    },
    {
      imageSrc: buldak,
      name: "Buldak spicy noodles",
      cookTime: "5 min",
      attributes: ["Noodles", "Spicy", "Boil"]
    },
    {
      imageSrc: buldakCarbonara,
      name: "Buldak carbonara noodles",
      cookTime: "5 min",
      attributes: ["Noodles", "Spicy", "Boil"]
    },
    {
      imageSrc: porkMama,
      name: "Pork mama noodles",
      cookTime: "5 min",
      attributes: ["Noodles", "Spicy", "Boil"]
    }
  ]

  return (
    <div className='resultPage'>
      {
        eggsAndRice
        ?
        <div className='resultPageHeader'>
          <GiFriedEggs color={'#bfd2c1'}/>
          <p>Today we're having eggs or rice.</p>
          <BiBowlRice color={'#bfd2c1'}/>
        </div>
        :
        <div className='resultPageHeader'>
          <CiBowlNoodles color={'#bfd2c1'}/>
          <p>Today we're having instant noodles or frozen meals.</p>
          <LuMicrowave color={'#bfd2c1'}/>
        </div>
      }
      <CardList list={eggsAndRice ? eggMeals : frozenMeals}/>
    </div>
  )
}

export default EggsNoodles