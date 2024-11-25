import React, { useRef } from 'react'
import './Contact.css'
import bgvideo from '../../assets/bgvideo.mp4'
import linkedin from '../../assets/linked.svg'
import github from '../../assets/github.svg'
import x from '../../assets/x.svg'
import insta from '../../assets/insta.svg'
import { Link } from "react-router-dom";
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import menuOpen from '../../assets/menuOpen.svg'
import menuClose from '../../assets/menuClose.svg'

const Contact = () => {

  const onSubmitForm = async (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eb259476-393a-41e2-a96c-57ff1b716915");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
       
       alert(res.message);
    }
  };



  const menuRef = useRef();

  const openMenu = () =>{
     
     menuRef.current.style.right="0";
  }
  
  const closeMenu = () =>{
     
    menuRef.current.style.right="-350px";
  }




  return (
    
    <div className='contact'>

    <div className="overlay-contact"></div>

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

         <div className="nav-icon" id="contact">

          <a href="https://www.linkedin.com/in/aryan-raj-138bb2287/" target="_blank"> <img src={linkedin} alt="" className="nav-icons" /></a>
          <a href="https://github.com/Code18Aryan" target="blank"><img src={github} alt="" className="nav-icons"/></a>
          <a href="https://x.com/Aryan20_Raj04" target="blank"><img src={x} alt="" className="nav-icons" /></a>
          <a href="https://www.instagram.com/why_aryan18/" target ="blank"><img src={insta} alt="" className="nav-icons" /></a>


         </div>

      </div>

      <div className="contact-title">Get in touch</div>

      <div className="contact-details">

        <div className="contact-left">

          <h1>Let's Connect</h1>

          <p className='job-title'>I'm currently avaliable to take on new projects, so feel free to send<br/> me a message about anything that you want me to work on. You can contact anytime.</p>

          <div className="contact-left-details">

            <div className="contact-left-detail"><img src={mail_icon} alt="" /><p>Aryan900raj@gmail.com</p></div>
            <div className="contact-left-detail"><img src={call_icon} alt="" /><p>8709064804</p></div>
            <div className="contact-left-detail"><img src={location_icon} alt="" /><p>Station Road Patratu, Ramgarh, Jharkhand 829118</p></div>

          </div>

          


        </div>

         
        <form onSubmit={onSubmitForm} className="contact-right">

<label>Your Name</label>
<input type="text" placeholder='Enter Your Name' name = 'name'/>
<label>Your Email</label>
<input type="email" placeholder='Enter Your Email' name ='email'/>
<label>Write Your Message</label>
<textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
<button type = "submit" className="contact-submit">Submit Now</button>

</form>




         <div className="conatct-icon">

          <a href="https://www.linkedin.com/in/aryan-raj-138bb2287/" target="_blank"> <img src={linkedin} alt="" className="conatct-icon" /></a>
          <a href="https://github.com/Code18Aryan" target="blank"><img src={github} alt="" className="conatct-icon"/></a>
          <a href="https://x.com/Aryan20_Raj04" target="blank"><img src={x} alt="" className="conatct-icon" /></a>
          <a href="https://www.instagram.com/why_aryan18/" target ="blank"><img src={insta} alt="" className="conatct-icon" /></a>


         </div>     
      






      </div>

    </div>
  )
}

export default Contact