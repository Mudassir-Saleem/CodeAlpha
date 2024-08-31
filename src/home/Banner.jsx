import React, { useState } from 'react'
import productData from "../products.json"

import { Link } from 'react-router-dom';
import Selectedcatagory from '../components/Selectedcatagory';


const title =(
    <h2>Search your one From <span>Thousands</span> of Products</h2>

)

const desc = "We Have The Largest Collection of Products";


const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },


    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },


    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },

    ];


const Banner = () => {

    const[searchinput ,setsearchinput] = useState("");
    const[filterproduct ,setfilterproduct] =useState(productData);

const handlesearch =e=>
{
const searchTerm =e.target.value;
setsearchinput(searchTerm);
// fliter prosucts based om search

const filtered =productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
setfilterproduct(filtered);

}

  return (
    <div className='banner-section  style-4'>

    <div className="container">
    <div className="banner-content">
    
    
{title}
<form >
<Selectedcatagory select={"all"}/>
<input type="text" name='search' id='search'  value={searchinput} placeholder='search your products' onChange={handlesearch} />

<button type='summit '><i class="icofont-ui-search"></i> </button>
</form>
<p>{desc}</p>
<ul className='lab-ul'>

{
    searchinput && filterproduct.map((product,i)   =>
    <li key={i}>
    <Link to={`/shop/${product.id }`}> 

    {product.name}
    </Link>
    </li> )

}
</ul>
    </div>

    
    </div>
    
    </div>
  )
}

export default Banner
