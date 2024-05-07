import React from 'react'
import {FaGithub , FaLinkedinIn , FaInstagram } from 'react-icons/fa'
import './Sidbar.css'
import { UseglobalContent } from '../Content'

const Sidbar = () => {
    const {checkeSidebar} = UseglobalContent()
  return (
    <div className={checkeSidebar? 'sidbar-container check-sidbar' : 'sidbar-container'}>

        <div className="page-sidbar">
           <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Portofolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
           </ul>
        </div>
        <div className="link-sidbar">
            <h3>Be My Friend</h3>
        <ul>
            <li><a href="https://www.instagram.com/godwin_djogbema?igsh=OGExaWc4dzk3empj"><FaInstagram/> Instagram</a></li>
            <li><a href="https://github.com/koffigodwin"><FaGithub/> Github</a></li>
            <li><a href="https://www.linkedin.com/in/godwin-koffi-djogbema-64a114301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/> LinkedinIn</a></li>
           </ul>
         
        </div>
        <p>"La force des forts c'est l'effort 💪"</p>
    </div>
  )
}

export default Sidbar