import React, { useEffect } from 'react';
import nexarobo from '../../assets/hero/nexa_robo-removebg.png'
import './Navbar.css';
import { emojiCursor } from "cursor-effects";

// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
import { gsap } from "gsap";
// import Shery from 'sheryjs';

export default function Navbar() {
 

  useEffect(() => {
    var typed;
    // new emojiCursor({ emoji: ["📞"] ,size: '10px',});

    // Apply neon cursor effect to the navbar container
    // neonCursor({
    //   el: document.querySelector('.container_outer'),      shaderPoints: 16,
    //   curvePoints: 80,
    //   curveLerp: 0.5,
    //   radius1: 5,
    //   radius2: 30,
    //   velocityTreshold: 10,
    //   sleepRadiusX: 100,
    //   sleepRadiusY: 100,
    //   sleepTimeCoefX: 0.0025,
    //   sleepTimeCoefY: 0.0025
    // });

    const timeoutId = setTimeout(() => {
      typed = new Typed('.auto-input', {
        strings: [
          "Engage in human-like conversation",
          "Converts leads into customers",
          "Available 24x7 365 days",
          "Increase your revenue",
          "Is a time saver"
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
    }, 1500);

    return () => {
      clearTimeout(timeoutId);

      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  const handleNavbar = () => {
    const container = document.querySelector(".container_outer");
    container.classList.toggle("active");
  };

  const navbarEffect = () => {
    gsap.from("#container_outer .firstSpan", {
      opacity: 0,
      y: 100,
      duration: 0.4,
      delay: 1,
    });
   
    gsap.from("#container_outer .secondSpan", {
      opacity: 0,
      y: 150,
      delay: 1
    });
  
    gsap.from("#container_outer", {
      scaleX: 0,
      scaleY: 0,
      opacity: 0,
      y: 1000,
      duration: 1,
      ease: "expo.out"
    });
  
    gsap.to("#container_outer", {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      onComplete: () => {
        gsap.to("#container_outer .firstSpan", {
          opacity: 1,
          x: 0,
          duration: 0.6,
          y:0
        });
        gsap.to(" #container_outer .secondSpan", {
          opacity: 1,
          x: 0,
          duration: 0.8,
          y:0,
        });
      },
    });
  };
  
  useEffect(() => {
    navbarEffect();
  }, []);

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

{/* <div id="back">
  <img src="https://media.istockphoto.com/id/1678330314/photo/brown-christmas-gift-box-with-a-blank-tag-on-rustic-wooden-table.jpg?s=2048x2048&w=is&k=20&c=aThdfOIhUawM4vflDNQr0QZcIoGqutLVRTR3-YZiv4o=" alt="1"  />
  <img src="https://media.istockphoto.com/id/1628580367/photo/christmas-background.jpg?s=2048x2048&w=is&k=20&c=TlyftzHTRCs1vuqX98w3n--mlvhhcI_mr7-43qDNNls=" alt="2"  />

</div> */}



          <header>
            <div className="overlay  container ">
              <div className="inner  px-32  w-full 	 absolute">
               <div className=" flex  justify-between w-100">
               <div className="left">
                <h6 className='text-8xl firstSpan text-start max-w-[800px] '   >Techavtar 
                 <span className=' text-yellow-400' >AI </span>
                 </h6> 
                 <h6 className="secondSpan text-8xl text-start max-w-[800px]" >Agent</h6>
                 
                 
                      <h1 className='text-5xl mt-20 text-start' >
                        <span className="auto-input text-yellow-300"></span> <br />
                      
                      </h1>
                </div>
                <div className="right flex align-top">
                {/* <img src={nexarobo} className='h-[500px] w-[400px] rotate-6 robot' alt="" /> */}
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
