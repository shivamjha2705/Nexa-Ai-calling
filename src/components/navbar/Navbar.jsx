import React from 'react'
import './Navbar.css'
export default function Navbar() {

const hanldeNavbar=()=>{
const container = document.querySelector(".container_outer");
  container.classList.toggle("active");
}


  return (

    <div className="container_outer">
    <div className="navbar">
      <div className="menu">
        <h3 className="logo">Mayank<span>Rana</span></h3>
        <div onClick={hanldeNavbar}  className="hamburger-menu">
          <div className="bar"></div>
        </div>
      </div>
    </div>

    <div className="main-container">
      <div className="main">
        <header>
          <div className="overlay">
            <div className="inner">
              <h2 className="title">Click on NavBar icon</h2>
              <p>
                In this project I try to make a 3D navbar animation you can check it out by clicking on the nav bar icon on ther top right corner.
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
        </header>
      </div>

      <div className="shadow one"></div>
      <div className="shadow two"></div>
    </div>

    <div className="links">
      <ul>
        <li>
          <a href="#" >Home</a>
        </li>
        <li>
          <a href="#" >Services</a>
        </li>
        <li>
          <a href="#" >Portfolio</a>
        </li>
        <li>
          <a href="#" >Testimonials</a>
        </li>
        <li>
          <a href="#" >About</a>
        </li>
        <li>
          <a href="#" >Contact</a>
        </li>
      </ul>
    </div>
  </div>

  )
}
