import { Route, Routes } from "react-router-dom"
import {   Home, Project, Tutorial } from "../pages"
import Player from "../pages/player/Player"
import Blog from "../pages/Blog"
import CssBlog from "../pages/Blog/CssBlog"
import HtmlBlog from "../pages/Blog/HtmlBlog"
import PrivacyPolicy from "../pages/PrivacyPolicy"


export const Allroute = () => {
 
  
  
  return (
    <main>
      <Routes>
        <Route path="" element={<Home  />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/blog/html" element={<HtmlBlog />} />
        <Route path="/blog/css" element={<CssBlog />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

      </Routes>
    </main>
  )
}

 
