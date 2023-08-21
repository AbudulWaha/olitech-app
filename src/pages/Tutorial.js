import React, { useEffect, useState } from 'react'
import { Card } from "../component"
import { useLocation } from 'react-router-dom'

export const Tutorial = () => {
  const [content, setContent]=useState([])
  const Search = useLocation().search
  const SearchParams = new URLSearchParams(Search).get('q')
 
  useEffect(()=>{
    const fetchData =async()=>{
      const res = await fetch(`https://olitech-server.onrender.com/tutorial`)
      const data =await res.json()
      setContent(data)
      console.log(content)
    }
    fetchData()
    
  },[])
  return (
    <div className='flex flex-col  w-full'>
      <h3 className='text-2xl font-semibold mt-3 ml-16 pl-6 leading-tight text-black-800 dark:text-white'>Html/Css</h3>
      <div className='flex justify-center w-full flex-wrap'>
        {
          content.map(com=>(
            <Card key={com.id} com={com} />
          ))
        }
      </div>
      <h3 className='text-2xl font-semibold mt-3 ml-16 pl-6 leading-tight text-black-800 dark:text-white'>Javascript</h3>
      
    </div>
  )
}


