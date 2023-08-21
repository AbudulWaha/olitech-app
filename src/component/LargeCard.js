import React from 'react'
import { Link } from 'react-router-dom'

export const LargeCard = ({links}) => {
  const {img, heading, main} =links
  return (
    <div>
      <div className="max-w-xl p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-3 my-3">
        <div>
          <img src={img} alt='' />
        </div>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{heading}</h5>
          {/* <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p> */}
          <div className="max-w-lg space-y-4 sm:flex sm:space-y-0 sm:space-x-4 border-t-4 ">
              <div className='flex justify-between m-2 '>
                <Link to={main} target='_blank'>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">view</button>
                </Link>
              </div>                
          </div>
      </div>
    </div>
  )
}


