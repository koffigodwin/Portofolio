import React from 'react'
import './project.css'

const Subproject = ({ img , description , tittle , url}) => {
  return (
    <div className="project-card">
        <a href={url}>
        <article className='single-card' >
           <img src={img} alt={tittle} className='images-card'/>
           <h4>{tittle}</h4>
           <p>{description}</p>
        </article>
        </a>
    </div>
  )
}

export default Subproject