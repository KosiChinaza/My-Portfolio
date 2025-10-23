import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Portfolio';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className='w-screen h-screen'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


