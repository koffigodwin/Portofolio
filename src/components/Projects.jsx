import React from 'react'
import {Porto_details} from '../data'
import Subproject from './Subproject'
import './project.css'

const Projects = () => {
  return (
    <section className='project-controler' id='Portofolio'>
      <h1>Portfolio</h1>
      <p className='previous-work'>my previous works</p>
      <div className="project-detaits">
         {
           Porto_details.map((items) =>{
            const { id , img, url, title , description} = items
            return <Subproject key={id}  img={img} url={url} tittle={title} description={description} />
           })
         }
      </div>

    </section>
  )
}

export default Projects