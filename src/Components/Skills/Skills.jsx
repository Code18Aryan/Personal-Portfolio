import React, { useRef } from 'react'
import './Skills.css'
import bgvideo from '../../assets/bgvideo.mp4'
import linkedin from '../../assets/linked.svg'
import github from '../../assets/github.svg'
import x from '../../assets/x.svg'
import insta from '../../assets/insta.svg'
import skill from '../../assets/skills.svg'
import { Link } from "react-router-dom"
import menuOpen from '../../assets/menuOpen.svg'
import menuClose from '../../assets/menuClose.svg'



const skills = () => {

const menuRef = useRef();

const openMenu = () =>{
   
  menuRef.current.style.right="0";
}

const closeMenu = () =>{
  
 menuRef.current.style.right="-350px";
}




 

  return (

    <div className='skills'>

          <div className="overlay-skills"></div>

          <video src={bgvideo} autoPlay loop muted />

          <div className="navbar">

          <img src={menuOpen} onClick={openMenu} alt="" className="nav-mob-open" />

            <div className="nav-list">

            <ul className="nav-menu" ref={menuRef} >

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



        <div className="skill-content">

            <div className="skill-left">
              
              <img src={skill} alt="" />
                   
            </div>
            
            <div className="skills-right">

             <div className='skill-title'>Skills and Expertise </div>

             <p>With a strong foundation in development, I excel in various programming languages such as Java, Kotlin, JavaScript. I am proficient in using frameworks and tools like Android Studio, React, Node.js to build innovative solutions which allowing me to create visually appealing and user-friendly interfaces.</p>


            </div>
          

          </div>

        <div className="center">

          <div className="skill-bottom">

              <p className='tech'>Technical Skills</p>

              <div className="technica-skills">

                <div className="technical-skill"><p>Programming Language: C++, Java, JavaScript, TypeScript, python</p></div>
                <div className="technical-skill"><p>Frameworks/ Libraries: React.js, Next.js, Node.js, Express.js, Springboot, Django</p></div>
                <div className="technical-skill"><p>DevOps:Docker, Kubernetes, AWS</p></div>
                <div className="technical-skill"><p>Database: MySQL, MongoDB, Redis</p></div>


              </div>


            </div>

           </div>


    </div>
  )
}

export default skills