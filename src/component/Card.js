import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({com}) => {
  const { id , head_name, poster}=com
  
  
 
  return (
   
    <div>
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
          <Link to={`/player/${id }`}>
              <img className="rounded-t-lg" src={poster} alt="" />
          </Link>
          <div className="p-5">
            <Link to={`/player/${id }`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head_name }</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          </div>
      </div>

    </div>
  )
}


