import React, { useRef } from 'react'
import './Projects.css'
import bgvideo from '../../assets/bgvideo.mp4'
import linkedin from '../../assets/linked.svg'
import github from '../../assets/github.svg'
import x from '../../assets/x.svg'
import insta from '../../assets/insta.svg'
import { Link } from "react-router-dom";
import projects_data from '../../assets/projects_data'
import menuOpen from '../../assets/menuOpen.svg'
import menuClose from '../../assets/menuClose.svg'



const Projects = () => {

  const menuRef = useRef();

  const openMenu = () =>{
     
     menuRef.current.style.right="0";
  }
  
  const closeMenu = () =>{
     
    menuRef.current.style.right="-350px";
  }
  
  



  return (


    <div className='projects'>

         <div className="overlay-projects"></div>

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

      <p className='hello'>My Projects</p>


      <div className="projects-container">

          {projects_data.map((project,index) =>{
             
              
                return <img key={index} src = {project.project_img} alt=''/>
          })}




      </div>






    </div>
  )
}

export default Projects