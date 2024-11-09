import React from 'react'
import HomePage from "@/components/HomePage";
import Skills from "@/components/Skills";
import Seperator from './Seperator';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {
  return (
    <div className='overflow-hidden'>
      <HomePage/>
      <Seperator/>
      <About/>
      <Seperator/>
      <Skills/>
      <Seperator/>
      <Projects/>
      <Seperator/>
      <Contact/>
    </div>
  )
}

export default Main;
