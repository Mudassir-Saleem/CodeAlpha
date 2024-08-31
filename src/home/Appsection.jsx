import React from 'react'
import { Link } from 'react-router-dom';

const btntext="Sign Up For Now";

const title ="Shop AnyTime,AnyWhere";

const desc ="Take shop on your any device with our App and learn all time what you want .Just download and install and ready to learn";






const Appsection = () => {
  return (
    <div className='app-section padding-tb'>
    <div className="container">
    
    <div className="section-header text-center">
    
    
    <Link to="/sign-up" className='lab-btn mb-4'>{btntext} </Link>

    <h2 className="title"> {title}</h2>
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
  )
}

export default Appsection
