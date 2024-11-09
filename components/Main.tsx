import React from 'react'
import HomePage from "@/components/HomePage";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion';
import Seperator from './Seperator';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:10}}
    className='overflow-hidden'>
      <Navbar/>
      <HomePage/>
      <Seperator/>
      <About/>
      <Seperator/>
      <Skills/>
      <Seperator/>
      <Projects/>
      <Seperator/>
      <Contact/>
    </motion.div>
  )
}

export default Main;
