import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLeft'>
            <div className='footerLeft_logo'>
                <Link to="/"><img className='header_icon' src='https://www.psdstamps.com/wp-content/uploads/2020/01/movies-stamp-png-768x512.png'/></Link>
            </div>
            <div className='footerLeft_cat'>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>POPULAR  </span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>|  TOP RATED  </span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>|  UPCOMING</span></Link>
            </div>
            <div className='footerLeft_desc'>
                <a>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br />
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br /> 
                    culpa qui officia deserunt mollit anim id est laborum. </a>
            </div>

            <div className='copyright'>
                <p>MyMovie React &copy;2020  .<span> Created By Nazwa Putri Nadhipa. </span></p>
            </div>
        </div>

        <div className='footerRight'>
        
        </div>
     
    </div>
  )
}

export default Footer