import React from 'react';

const styles = {
    Project: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'left',
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
            <h2 style={styles.ProjectTitle}>{title}</h2>
            <img src={image} alt={title} style={styles.ProjectImage}/>
            <p style={styles.ProjectDescription}>{description}</p>
            <a href={link} style={styles.ProjectLink}>View Project</a>
        </div>
    );
};

export default Project;