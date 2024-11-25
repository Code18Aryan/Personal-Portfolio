import React, { useRef } from "react";
import "./Home.css";
import bgvideo from '../../assets/bgvideo.mp4'
import linkedin from '../../assets/linked.svg'
import github from '../../assets/github.svg'
import x from '../../assets/x.svg'
import insta from '../../assets/insta.svg'
import { Link } from "react-router-dom";
import menuOpen from '../../assets/menuOpen.svg'
import menuClose from '../../assets/menuClose.svg'

const Home = () => {

const menuRef = useRef();

const openMenu = () =>{
   
   menuRef.current.style.right="0";
}

const closeMenu = () =>{
   
  menuRef.current.style.right="-350px";
}



  return (

    <>
    <div className="home">

      <div className="overlay"></div>

      <video src={bgvideo} autoPlay loop muted />

      <div className="navbar">

        <img src={menuOpen} onClick={openMenu} alt="" className="nav-mob-open" />

         <div className="nav-list">

            <ul className="nav-menu" ref={menuRef}>

            <img src={menuClose}  onClick={closeMenu} alt="" className="nav-mob-close" />

            <li><Link to = "/"><a href="">Home</a></Link></li>
            <li><Link to="/about"><a href="">About Me</a></Link></li>
            <li><Link to = "/projects"><a href="">Projects</a></Link></li>
            <li><Link to = "/skills"><a href="">Skills</a></Link></li>
            <li><Link to = "/contact"><a href="">Contact</a></Link></li>

           </ul>

         </div>

         <div className="nav-icons">

          <a href="https://www.linkedin.com/in/aryan-raj-138bb2287/" target="_blank"> <img src={linkedin} alt="" className="nav-icons" /></a>
          <a href="https://github.com/Code18Aryan" target="blank"><img src={github} alt="" className="nav-icons"/></a>
          <a href="https://x.com/Aryan20_Raj04" target="blank"><img src={x} alt="" className="nav-icons" /></a>
          <a href="https://www.instagram.com/why_aryan18/" target ="blank"><img src={insta} alt="" className="nav-icons" /></a>
  

         </div>

        

      </div>


      <div className='hero'>

        <div className="hero-intro"><p>The best way to predict the future is to invent it</p></div>
        <div className="hero-name"> I’m Aryan Raj,  aspiring <span className='company-name'>Software Engineer</span></div>
        <div className="hero-colab"><p>I’m always excited to connect with like-minded professionals and explore new opportunities</p>.<p className="paragraph"> Whether you’re looking for a collaborator, have a project in mind, or just want to say hello,</p> <p> feel free to reach out to me through the contact form</p></div>

        <div className="hero-button">

        <Link to="/contact"><div className="hero-button1">Contact Me </div></Link>
        <a href="https://x.com/Aryan20_Raj04" target="blank" ><div className="hero-button2">Message </div></a>

        </div>

        </div>

        <div className="footer">

               

          <div className="footer-left">

            <p> Copyright © 2024 All rights reserved</p>
    
          </div>

          <div className="footer-middle">

          <p>Design and Developed By Aryan Raj  </p>
          </div>

          <div className="footer-right">

           <p>Term of Services</p>
           <p>Privacy Policy</p>
           <p> Sales Policy</p> 
           <p>India</p>

          </div>
            
        </div>



    </div>

    </>

  );
};

export default Home;
