



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo/logo.png";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const [socialToggle, setSocialToggle] = useState(false);

  const [headerFixed, setHeaderFixed] = useState(false);

  // add event listener
  useEffect(() =>
    
    {



    const handleScroll = () => 
      
      
      {


      if     (window.scrollY > 200) {


            setHeaderFixed(true);

                                    }
       else
       
       
                                    {
          
        setHeaderFixed(false);

                                          }

    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // header top start here

    <header
      className={`header-section style-4 
         ${
        headerFixed ? "headerFixed fadeInup" : ""
      }`}

    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login" className="">
              Log in
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">

        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img     src={logo}  alt=  "logo pichay" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={` lab-ul ${menuToggle ? "active" : ""}`}>
                  <li className="">
                    <Link to={"/"}> Home</Link>
                  </li>

                  <li className="">
                    <Link to="/shop"> Shop</Link>
                  </li>
                  <li className="">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <Link to="/sign-up" className=" lab-btn me-3 d-none d-md-block  ">
                

                Create Account
              </Link>

              <Link to="/Login" className="d-none d-md-block">
                log In
              </Link>

              <div onClick={ () => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >

              
              <span></span>
              <span></span>
              <span></span>
              
              
              </div>

              <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
              <i class="icofont-info-circle"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
