import React from 'react'
import Banner from './Banner'
import Navitems from '../components/Navitems'
import Homecatagory from './Homecatagory'
import Catagoryshowcase from './Catagoryshowcase'
import Register from './Register'
import Locationspread from './Locationspread'
import Appsection from './Appsection'
import Sponser from './Sponser'


const Home = () => {
  return (
    <div className=''>
 
    <Banner/>
    <Homecatagory/>
<Catagoryshowcase/>

<Register/>
<Locationspread />
<Appsection />

<Sponser/>
    </div>
  )
}

export default Home
