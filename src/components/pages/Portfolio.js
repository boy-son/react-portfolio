import React from 'react';
import Project from '../Project';

const projects = [
    {
        title: 'Moving Parts',
        image: 'my-app\src\assets\homepage.png',
        description: 'This is a project I made using CSS and HTML. It is a website for a fictional moving company that lets you look at and compare housing prices, job and income outlooks, and average rent for the area you would like to potentially move to. I had a lot of fun with this and feel proud of what we were able to accomplish with only two of us.',
        link: 'github.com/boy-son/Moving-Parts'
    },

    {
        title: 'Going Medieval',
        image: 'my-app\src\assets\Capture.PNG',
        description: 'This is a project I made using the MVC framework. It is a live strategy game using phaser. this was a whole lot of work to bend MVC around our game but I think we are all happy with the end result.',
        link: 'https://github.com/AlexNash91/Going-Medieval'
    },

    {
        title: 'Bet Stone',
        image: 'my-app\src\assets\playing-cards-3003743.jpg',
        description: 'This is a project I am in the process of making with my group, hence the placeholder image. More to come soon!',
        link: 'https://github.com/Danocide/bussin-betters'
    },
]

const styles = {
    Portfolio: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'left',
        padding: '10px'
    },
};

function Portfolio() {
 return(
        <div style={styles.Portfolio}>
            <h2>Portfolio</h2>
            {projects.map((project, i) => (
                <Project key={i} 
                title={project.title} 
                image={project.image} 
                description={project.description} 
                link={project.link}/>
            ))}
        </div>
 )
};

export default Portfolio;