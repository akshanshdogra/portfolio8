import React from 'react'
import "./Navbar.css";


function Navbar() {
    return (
        <div>
       

        <header className= "dark-menu header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Akshansh</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className= "navicon navicon-dark"></span>
        </label>
        <ul className= "dark-menu menu">
          
            <li>
              <a href="#about">About</a>
            </li>
          
     
            <li>
              <a href="#skills">Skills</a>
            </li>
          
         
            <li>
              <a href="#opensource">Experience</a>
            </li>
         
          
           
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          
        </ul>
      </header>
            
        </div>
    )
}

export default Navbar
