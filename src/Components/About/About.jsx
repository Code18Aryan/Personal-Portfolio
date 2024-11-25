import React, { useRef } from 'react'
import './About.css'
import logo2 from '../../assets/logo2.svg'
import bgvideo from '../../assets/bgvideo.mp4'
import linkedin from '../../assets/linked.svg'
import github from '../../assets/github.svg'
import x from '../../assets/x.svg'
import insta from '../../assets/insta.svg'
import { Link } from "react-router-dom";
import menuOpen from '../../assets/menuOpen.svg'
import menuClose from '../../assets/menuClose.svg'

const About = () => {

  const menuRef = useRef();

  const openMenu = () =>{
     
     menuRef.current.style.right="0";
  }
  
  const closeMenu = () =>{
     
    menuRef.current.style.right="-350px";
  }



  return (
    
    <div className='about' id="about">

      <div className="overlay-about"></div>

      <video id="about-video"className='about-video' src={bgvideo} autoPlay loop muted />


      <div className="navbar">

      <img src={menuOpen} onClick={openMenu} alt="" className="nav-mob-open" />

         <div className="nav-list">

            <ul className="nav-menu" ref={menuRef}>

            <img src={menuClose}  onClick={closeMenu} alt="" className="nav-mob-close" />

            <li><Link to = "/"><a href="#home">Home</a></Link></li>
            <li><Link to="/about"><a href="#aboutus">About Me</a></Link></li>
            <li><Link to = "/projects"><a href="#projects">Projects</a></Link></li>
            <li><Link to = "/skills"><a href="#acheiment">Skills</a></Link></li>
            <li><Link to = "/contact"><a href="#contact">Contact</a></Link></li>

          </ul>

         </div>

         <div className="nav-icons">

          <a href="https://www.linkedin.com/in/aryan-raj-138bb2287/" target="_blank"> <img src={linkedin} alt="" className="nav-icons"/></a>
          <a href="https://github.com/Code18Aryan" target="blank"><img src={github} alt="" className="nav-icons"/></a>
          <a href="https://x.com/Aryan20_Raj04" target="blank"><img src={x} alt="" className="nav-icons" /></a>
          <a href="https://www.instagram.com/why_aryan18/" target ="blank"><img src={insta} alt="" className="nav-icons" /></a>
  

         </div>

      </div>






      <div className="about-intro">

          <div className="about-left">

            <img src={logo2} alt="" />

          </div>

          <div className="about-intro-right">

               <p className='about-me'>About Me</p>

                <p className='intro'>Hello! I'm Aryan Raj , a passionate  software developer with a keen interest in  mobile applications, web development currently in 3rd year of engineering from ITER College Bhubaneswar. </p>

                <div className="coding-acheivement">

                    <ul className='coding-list'>

                      <div className='list'><li>Achieved Highest Rating of 1640 on Leetcode</li></div>
                      <div className='list'><li>Solved More Than 450 Question on Leetcode</li></div>
                      <div className='list'><li>Global Rank 400 in Leetcode Weekly Coding Contest</li></div>
                      <div className='list'><li>Global Rank 230 in Div 3 CodeChef Contest </li></div>
                      <div className='list'><li>Participated over 50+ coding contest </li></div>
                      <div className='list'><li>Solved Over More Than 2000+ DSA Questions</li></div>

                    </ul>


                </div>

          </div>

      </div>


      <div className="footer-about">

        <p>Design and Developed By Aryan Raj 💗</p>

      </div>


        
    </div>
  )
}

export default About