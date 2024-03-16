import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homecomponent from './home'
import RoomsComponent from './rooms'
import Facilities from './facilities'
import Contact from './contact'
import Navbar from './navbar'
import Booking from './booking'

function RouterComponent() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homecomponent/>} />
        <Route path="/rooms" element={<RoomsComponent/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
