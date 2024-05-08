import React from 'react'
import './about.css'
import aboutimage from '../assets/aboutimage.jpg'
import {CiFileOn} from 'react-icons/ci'
import { FaLightbulb } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <section className='about-page' id='About'>
        <h1>About Me</h1>
        <p className='intro'>my introduction</p>
        <div className="about-container">
        <div className="image-about">
         <img src={aboutimage} alt="about image" />
        </div>
        <div className="text-about">
            
            <p className='description'>I am web developer with years of experience,Armed with a solid foundation in frontend and backend development
            with a passion for innovation , I bring a fresh perspective to every project. a hard worker and team worker with a problem solving skills
             , I have help many people to archive their project and colaborate with other developers </p>


        <div className="resume">
          <h2>Resume</h2>
          <span>My educational journey over the years </span>
          <p><strong>2014-2018 : </strong> Secondary school in Togo</p>
           <p><strong>2019-2021 : </strong> high school degree in Togo</p>
          <p><strong>2022-2025 : </strong> Bachelor in Computer Science in India</p>
      </div>




             <button className='resume-about'><a href="https://drive.google.com/file/d/1W-ZgZu_SmUzI-lB8nqp4sKv8c-ac9_aD/view?usp=drive_link">Dowanload cv <CiFileOn className='file-icon'/> </a></button> 
        </div>
        </div>

    </section>
  )
}

export default About

