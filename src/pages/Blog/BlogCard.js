import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({log}) => {
  const { name, img, about, link} = log
  return (
    <div>
      <div class="max-w-xl m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row">
          <div className='flex px-3 '>
            <Link to={link}>
                <img class="rounded-t-lg max-h-56 pt-4" src={img} alt='' />
            </Link>
          </div>
          <div class="p-5 max-w-md">
              <Link to={link}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
              <Link to={link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
              
          </div>
      </div>
    </div>
  )
}

export default BlogCard
