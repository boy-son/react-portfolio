import React from 'react';
import '../styles/Project.css'

const styles = {
    Project: {
        backgroundColor: '#6e3131',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    },
    ProjectTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    ProjectImage: {
        width: '100%',
        marginBottom: '10px',
    },
    ProjectDescription: {
        marginBottom: '10px',
    },
    ProjectLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

function Project({title, image, description, link}) {
    return (
        <div style={styles.Project}>
            <div className="image-container">
                <img src={image} alt={title} style={styles.ProjectImage}/>
                <div className="image-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={link}>View Project</a>
                </div>
            </div>
        </div>
    );
};

export default Project;