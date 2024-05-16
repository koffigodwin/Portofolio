import React from 'react'
import {} from 'react-icons'
import { IoIosContact } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import {FaGithub , FaArrowUp , FaLinkedinIn , FaInstagram} from 'react-icons/fa'
import './contact.css'

const Contact = () => {
  return (
    <section id='Contact' className='contact-section'>
     <h1>Send Me a Message</h1>
    <p className='contact-paragraph'>Got a question or proposal , just want to say 
       hello ! Go ahead</p>
               <div className="sub-first-contact">
               <div className="email">
                  <label><FaMessage /></label>
                  <h5>Email</h5>
                  <p>mawududzi4@gmail.com</p>
              
                </div>
                <div className="whatsapp">
                 <label><IoIosContact /></label>
                 <h5>Whatsapp</h5>
                 <p>+917200463254</p>
        
                </div>
                <div className="support">
                    <label><BiSupport /></label>
                    <h5>Support</h5>
                    <p>online 24/7</p>
                </div>
               </div>
     <footer className='footer'>
      <div className="projecttalk">
        <p>Let's talk about project ! I believe in fact that every idea you have in your mind can  be achieved.
          Every project starts with a chat, let's convert your brilliant ideas to the reality </p>
          <a href="https://wa.me/+917200463254">Tell me about your project</a>
      </div>
    
     <div className="footericons">
         <button className='footer-btn'><a href="https://www.instagram.com/godwin_djogbema?igsh=OGExaWc4dzk3empj"><FaInstagram/></a></button>
         <button className='footer-btn'><a href="https://github.com/koffigodwin"><FaGithub/></a></button>
         <button className='footer-btn'><a href="https://www.linkedin.com/in/godwin-koffi-djogbema-64a114301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a></button>
         <button className='footer-btn'><a href="#Home"><FaArrowUp/></a></button>
         
       </div>
     </footer>

    </section>
  )
}

export default Contact