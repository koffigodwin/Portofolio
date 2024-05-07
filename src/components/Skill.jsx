import React from 'react'
import { ImCheckboxChecked } from "react-icons/im";
import './skill.css'

const Skill = () => {

  return (
    <section className='skills-page' id='Skills'>
        <h1>Skills</h1>
        <p className='skill-level'>my technical level</p>
        <div className='skill-container'>
            <div className="frontend">
                <h2>Frontend</h2>
                <div className="frontend-skill">
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>HTML</h5>
                     </div>
                     <p className='skill-description'>Advanced</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>CSS</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Bootstrap</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Git</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>React</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Javasript</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                </div>
            </div>
            <div className="frontend">
                <h2>Backend</h2>
                <div className="frontend-skill">
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Node js</h5>
                     </div>
                     <p className='skill-description'>Basic</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Express js</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Java</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>Python</h5>
                     </div>
                     <p className='skill-description'>Basic</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>PHP</h5>
                     </div>
                     <p className='skill-description'>Basic</p>
                   </div>
                   <div className="each-skil">
                     <div className="skill-name">
                     <p className='icon-skill'><ImCheckboxChecked/></p>
                     <h5>MySQL</h5>
                     </div>
                     <p className='skill-description'>Intermediate</p>
                   </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Skill
