import React from 'react'
import {FaGithub , FaArrowDown , FaLinkedinIn , FaInstagram} from 'react-icons/fa'
import image from '../assets/brocode.jpg'
import '../index.css'
import { FaLocationArrow } from "react-icons/fa6";
import { BsMouse3Fill } from "react-icons/bs";

const Home = () => {
  return (
    <section className='home-container' id='Home'>
        <div className="homepage">
        <div className="homeicons">
         <button className='btn-icons'><a href="https://www.instagram.com/godwin_djogbema?igsh=OGExaWc4dzk3empj"><FaInstagram/></a></button><br />
         <button className='btn-icons'><a href="https://github.com/koffigodwin"><FaGithub/></a></button><br />
         <button className='btn-icons'><a href="https://www.linkedin.com/in/godwin-koffi-djogbema-64a114301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a></button>
       </div>
       <div className="home-text">
        <h1>Godwin Djogbema 🖐</h1>
        <div className="title">
          <div className='lines'></div>
           <h4 className='jobname'>Web Developer</h4>
        </div>
        <p>I'm a passionate frontend developer and very dedicated to my work with two years expirience</p>
        <button className='messages-btn'><a href="/">Say Hello <FaLocationArrow className='file-icon'/> </a></button>
       </div>
       <div className="Home-image">
        <img className='images' src={image} alt="image"/>
        
       <button className='message-btn'><a href="https://wa.me/+917200463254">Say Hello <FaLocationArrow className='file-icon'/> </a></button>
       </div>
        </div>
       <p className='scroll-down'><a href="#Contact"><BsMouse3Fill /> scroll down <FaArrowDown /></a></p>
      
    </section>
  )
}

export default Home