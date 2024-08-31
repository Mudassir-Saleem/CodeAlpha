import { useState } from 'react'

import reactLogo from './assets/react.svg'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navitems from './components/Navitems'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
    <Navitems/>
<div className='min-vh-100 '>
<Outlet/>
</div>
<Footer/>

        
    </>
  )
}

export default App
