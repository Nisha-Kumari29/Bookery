import React from 'react';

import Home from './home/Home';
import Signup from "./components/Signup";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";

import Courses from "./courses/Courses";
import About from './components/About';


function App () {
  return (
   <>
  <div className='dark-bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={<Courses />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
   </Routes>
   
  </div>
   </>
  )
}

export default  App;
