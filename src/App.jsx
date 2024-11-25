import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About';




const App = () => {
  return (

    <BrowserRouter>

    <Routes>

      <Route path ='/' element={<Home/>}/>
      <Route path = 'about' element={<About/>} />
      <Route path = 'projects' element = {<Projects/>} />
      <Route path = 'skills' element = {<Skills/>} />
      <Route path = 'contact' element = {<Contact/>} />
      

    </Routes>

    </BrowserRouter>
    
  );
}

export default App