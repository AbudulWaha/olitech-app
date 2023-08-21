import React, { useEffect } from 'react'
import { Card } from '../component/Card'
import hero  from "../images/computer.jpg"
import { Link } from 'react-router-dom'
import { LargeCard } from '../component'
import { useState } from 'react'
import shop from "./shopcart.png"
import cinemate from "./cinemate.png"



export const Home = () => {
  const [content, setContent]=useState([])
  const procart =[
    {id : 1,img : shop, heading : "ShopCart", main : "https://mytaskade.netlify.app"},
    {id : 2,img : cinemate, heading : "Cinemate" , main : "https://cinemat.netlify.app" },
    
  ]
  
  useEffect(()=>{
    const fetchData =async()=>{
      const res = await fetch('https://olitech-server.onrender.com/home')
      const data = await res.json()
      setContent(data)
      // console.log(content)
    }
    fetchData()
  },[])
  

  

  
    
  return (
    <main >
     
      <div className='flex justify-between flex-wrap-reverse relative mx-3 px-5'>
        <div className='max-w-xl   dark:text-white dark:bg-slate-900 bg-white pl-3'>
          <h2 className='text-6xl leading-tight font-medium font-sans text-left  '>Learn Web Design, Land Your Dream Job</h2>
          <p></p>
          <div className='flex m-4'>
            <Link to="/tutorial">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-9 py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Tutorial</button>
            </Link>
            <Link to="/project">
              <button type="button" className="py-3.5 px-9 mr-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Project</button>
            </Link>

          </div>
        </div>
        <div className='visual my-4 max-w-xl overflow-hidden'>
          <img className='rounded-lg ' src={hero} alt='' />
        </div>
        
      </div>

      <h3 className='text-xl font-semibold mt-3 ml-16 pl-6 leading-tight text-slate-800 dark:text-white'>Tutorial</h3>
      <div className=' flex justify-center flex-wrap'>
     
        {
          content.map(com=>(
            <Card key={com.id} com= {com}/>
          ))
        }
      </div>
      <h3 className='text-xl font-semibold mt-3 ml-16 pl-6 leading-tight text-slate-800 dark:text-white'>Project</h3>
      <div className=' flex justify-center flex-wrap'>
      {
        procart.map(( cart)=>(
          <LargeCard key={cart.id} links={cart} />
        ))
      }
     
      </div>
    </main>
  )
}


