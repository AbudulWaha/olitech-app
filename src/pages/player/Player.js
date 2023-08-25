import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SmallCard } from './SmallCard'

const Player = () => {
  const [state, setState] = useState({})
  const [fget, setGet] = useState([])
  const get = useParams()
  const Param = get.id
  useEffect(()=>{
    const fetchData =async()=>{
      const res = await fetch(`https://olitech-server.onrender.com/tutorial/${Param}`)
      const data = await res.json()
      setState(data)

    }
    const getData = async ()=>{
      const res = await fetch("https://olitech-server.onrender.com/tutorial")
      const data = await res.json()
      setGet(data)
    }
    fetchData()
    getData(setGet)
  },[Param])
  return (
    <div >
      <div className='max-w-full max-h-full py-2 px-2 flex justify-between flex-wrap'>
        <div className='w-2/4 max-lg:w-full '>
          <iframe width="100%" height="400" src={state.video} title="olitech" frameBorder="0"  allowFullScreen></iframe>
          <h1 className='text-xl text-black'>{state.head_name}</h1>
        </div>
        <div className='max-w-xl '>
          {
            fget.map(get=>(
              <SmallCard key={get.id} get={get} />
            ))
          }
        </div>
        
      </div>
    </div>
  )
}

export default Player
