import React from 'react'

import PageHeader from '../components/PageHeader'
import { Router } from 'react-router-dom';




const title ="Welcome to Shop-Cart – Your One-Stop Shop for Your Product";

const desc ="At ShopCart, we believe in making shopping an enjoyable and seamless experience for everyone. Founded in [Year], our mission has always been to provide our customers with the best selection of high-quality products, exceptional customer service, and unbeatable prices.";



const About = () => {
  return (
    <div>


    <PageHeader  title="Our About  Page" curpage="About"  />

    <div className='app-section padding-tb'>
    <div className="container">
    
    <div className="section-header text-center">
    


    <h3 className="title"> {title}</h3>
    <p>{desc}</p>
    
    
    
    </div>


    <div className="section-wrapper">
    
    
    <ul className="lab-ul">
    
    <li><a href="#"> <img src="/src/assets/images/app/01.jpg" alt="" /></a></li>


    <li><a href="#"> <img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
    
    </ul>

    </div>

    </div>
      
    </div>
      
    </div>
  )
}

export default About
