import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import '../../styles/Project.css'

const projects = [
    {
        title: 'Moving Parts',
        image: '/homepage.png',
        description: 'This is a project I made using CSS and HTML. It is a website for a fictional moving company that lets you look at and compare housing prices, job and income outlooks, and average rent for the area you would like to potentially move to. I had a lot of fun with this and feel proud of what we were able to accomplish with only two of us.',
        link: 'https://github.com/boy-son/Moving-Parts'
    },

    {
        title: 'Going Medieval',
        image: '/Capture.PNG',
        description: 'This is a project I made using the MVC framework. It is a live strategy game using phaser. this was a whole lot of work to bend MVC around our game but I think we are all happy with the end result.',
        link: 'https://github.com/AlexNash91/Going-Medieval'
    },

    {
        title: 'Bet Stone',
        image: '/playing-cards-3003743.jpg',
        description: 'This is a project I am in the process of making with my group, hence the placeholder image. More to come soon!',
        link: 'https://github.com/Danocide/bussin-betters'
    },
]

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <AwesomeSlider animation= "foldOutAnimation" cssModule={[CoreStyles, AnimationStyles]}>
        {projects.map((project, i) => (
          <div key={i}>
            <div className='project-container'>
              <img className="project-image" src={project.image} alt={project.title} />
              <div className="image-info">
                <h2>{project.title}</h2>
             <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            </div>
            </div>
        ))}
      </AwesomeSlider>
    </div>
  )
}

export default Portfolio;