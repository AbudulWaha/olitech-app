import React from 'react'
import BlogCard from './Blog/BlogCard'
import html from './Blog/html_image.png'
import css from './Blog/css_image.png'

const Blog = () => {
  const blog= [
    {id : 1 , name : "HTML Tutorial", about : "HTML stands for Hypertext Markup Language, It is widely used language to write web pages " , img : html, link : "/blog/html"},
    {id : 2, name: " CSS Tutorial", about : "With CSS, you can control the visual appearance of your website. You can change the layout, colors, fonts, and more to create a unique and professional-looking website.", img: css, link: "/blog/css"}
  ]
  return (
    <main>
      <div className='flex flex-wrap'>
      {
        blog.map(log=>(
          <BlogCard key={log.id} log={log}/>
        ))
      }

      </div>
      
    </main>
  )
}

export default Blog
