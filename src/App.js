import React from 'react'
import About  from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import  Home from './pages/Home'
import Enquiry from './Compontents/Enquiry'
import Header from './Compontents/Header'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Countries from './pages/Countries'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/countries" element={<Countries/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path='/enquiry' element={<Enquiry/>}/>
          </Routes>
    
    </BrowserRouter>
  )
}

export default App