import React from 'react'
import {FcMenu} from 'react-icons/fc'
import '../index.css'
import { UseglobalContent } from '../Content'

const Navbar = () => {
     const {functionchecked} = UseglobalContent()
  return (
    <section className='navbar'>
        <nav className='navbar-container'>
            <div className="logoname">
               <h3 className='yourname'>Godwin</h3>
            </div>
            <div className="navlinks">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Portofolio">Portfolio</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className="navicons">
                <button className='btn-nav-icon' onClick={functionchecked}><FcMenu/></button>
            </div>
        </nav>
    </section>
  )
}

export default Navbar