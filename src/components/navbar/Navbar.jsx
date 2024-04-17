import React, { useEffect } from 'react';
import nexarobo from '../../assets/hero/nexa_robo-removebg.png'
import './Navbar.css';
import { gsap } from "gsap";

export default function Navbar() {
  useEffect(() => {
    const typed = new Typed('.auto-input', {
      strings: ["Engage in human-like conversation","Converts leads into customers","Available 24x7 365 days","Increase your revenue","Is a time saver"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy(); // Clean up the Typed instance when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleNavbar = () => {
    const container = document.querySelector(".container_outer");
    container.classList.toggle("active");
  };

const navbarEffect=()=>{
  gsap.from("#container_outer",{
    transform:"scaleX(0) scaleY(0)"
  })
  gsap.to("#container_outer",{
    transform:"scaleX(1) scaleY(1)"
  })
}

useEffect(() => {
navbarEffect()
}, [])

  return (
    <div id='container_outer' className="container_outer">
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">NEXA<span></span></h3>
          <div onClick={handleNavbar} className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay  container ">
              <div className="inner  px-32  w-full 	 absolute">
               <div className=" flex mt-48 justify-between w-100">
               <div className="left">
                <h6 className='text-8xl text-start max-w-[800px] '   >Techavtar  <span className='text-yellow-400' >AI </span>Agent</h6>
                      <h1 className='text-5xl mt-20 text-start' >
                        <span className="auto-input text-yellow-300"></span> <br />
                      
                      </h1>
                </div>
                <div className="right flex align-top">
                <img src={nexarobo} className='h-[500px] w-[400px] rotate-6 robot' alt="" />
                 </div>
               </div>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
