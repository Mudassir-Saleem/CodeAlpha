import React from 'react'
import PageHeader from '../components/PageHeader'




const title ="The Importance of Sustainable Shopping: How Your Choices Can Make a Difference";

const desc ="In today's fast-paced world, the convenience of online shopping has become a staple in our lives. But as we fill our virtual carts, it's essential to consider the impact our purchases have on the environment. Sustainable shopping isn't just a trend—it's a crucial step towards a healthier planet. Here’s why your choices matter and how you can make a difference with each purchase.";

const title2 ="What is Sustainable Shopping?";

const desc2="Sustainable shopping involves purchasing products that are made in a way that minimizes environmental impact, supports fair labor practices, and promotes ethical sourcing. This means choosing items that are eco-friendly, ethically produced, and often, more durable than their conventional counterparts.";


const blog = () => {
  return (
    <div>
    <PageHeader  title="Our Blog  Page" curpage="Blog"  />

   
    <div className='app-section padding-tb'>
    <div className="container">
    
    <div className="section-header text-center">
    


    <h3 className="title"> {title}</h3>
    <p>{desc}</p>
    <br />
    <br />
    <br />
    <br />
    
    <h3 className="title"> {title2}</h3>
    <p>{desc2}</p>
    
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

export default blog
