import React from 'react'
import './recipe.css'
import {motion} from "framer-motion"

export default function Recipe({tittle ,  Calories , Image ,ingredient}) {
  return (
    <motion.div
   
    whileInView={{left: "4rem"}}
    transition={{duration : 2 , type: 'spring'}}
    
    className='recipeAdder'>
        <h1>{tittle}</h1>
<p>Total Calories: {Calories}</p>
<ol>
   {ingredient.map(ingredient=>(
     <li>{ingredient.text}</li>
   ))}
</ol>
<img src={Image} alt="" />
    </motion.div>
  )
}
