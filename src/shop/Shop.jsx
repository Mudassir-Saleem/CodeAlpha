import React, { useState } from "react";
import Data from '../products.json'
import ProductCards from "./ProductCards";

import PageHeader from "../components/PageHeader";


import Pagination from "./Pagination";
import Search from "./Search";
import ShopCatagory from "./ShopCatagory";

const showResults = "Showing 01 -12 of 139 Results";

const Shop = () => 
  {
  const [GridList, setGridList] = useState(true);
const[products,setproducts]= useState(Data)


//Pagination


const [curretpage , setcurrentpage] = useState(1);
const productperpage = 12;


const indexoflastproduct= curretpage * productperpage;

const indexoffirstproduct= indexoflastproduct - productperpage;

const currentproducts = products.slice(indexoffirstproduct , indexoflastproduct);

//fuenction to chnage the current pageeeee

const paginate =(pageNumber) =>
  
  
  {


  setcurrentpage(pageNumber);



}
  
const [selectedcatagory,setselectedcatagory] =useState("All")
const menuitem =[  ... new Set(Data.map((val) => val.catagory))];

  const filteritem =(curcatagory) => {

    if(curcatagory=== "All")
    {
      setproducts(Data)
    }

    const  newitem = Data.filter((newVal) =>
    {
    
    return newVal.catagory === curcatagory;

    setproducts(newitem);
  
  
  })
setselectedcatagory(curcatagory);


  }


  return (
    <div>
      <PageHeader title="Our Shop Page" curpage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults} </p>

                  <div
                    className={` product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}> 
                  <a className="grid" onClick={() => setGridList(true)}>
                  <i className="icofont-ghost"></i>
                  </a>
                  <a className="list" onClick={() => setGridList(false)}>
                    <i className="icofont-listine-dots"></i>
                  </a>
                </div>
                </div>
<div>

<ProductCards GridList={GridList} products={currentproducts}/>
</div>

<Pagination

productperpage={productperpage}
totalproducts={products.length}
paginate={paginate}
activePage ={curretpage}



/>
              </article>
            </div>
            <div className="col-lg-4 col-12">
            
            <aside>
            <Search products={products}  GridList={GridList}/>
           
           <ShopCatagory
           
           filterItem={filteritem}
           setItem ={setproducts}
          menuItems={menuitem}
          setProducts={setproducts}
          selectedCatagory={selectedcatagory} />



            </aside>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
