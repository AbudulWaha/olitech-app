import React from 'react'
import { LargeCard } from '../component'
import shop from "./shopcart.png"
import cinemate from "./cinemate.png"

export const Project = () => {
  const procart =[
    {img : shop, heading : "ShopCart", main : "https://mytaskade.netlify.app" , source : "https://github.com/AbudulWaha/edited.git"},
    {img : cinemate, heading : "Cinemate" , main : "https://cinemat.netlify.app" , source : "https://github.com/AbudulWaha/cinemate.git"},
    
  ]
  return (
    <main>
      {/* <h3 className='text-2xl font-semibold mt-3 ml-16 pl-6 leading-tight text-black-800 dark:text-white'>Projects</h3> */}
      <div className='flex flex-wrap justify-center'>
        {
          procart.map((cart, index)=>(
            <LargeCard key={index} links={cart}/>
          ))
        }
      
      
      </div>
    </main>
  )
}


