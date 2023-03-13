import React from 'react';

const styles = {
    Resume: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'left',
        padding: '10px'
    },
    ResumeTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    ResumeImage: {
        width: '100%',
        marginBottom: '10px',
    },
    ResumeDescription: {
        marginBottom: '10px',
    },
    ResumeLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

function Resume() {
    return(
        <div style={styles.Resume}>
            <h2 style={styles.ResumeTitle}>Resume</h2>
            <img src='src\assets\Untitled.png' alt='me!' style={styles.ResumeImage}/>
            <p style={styles.ResumeDescription}>My Resume: </p>
            <a href='src\assets\resume.pdf' style={styles.ResumeLink}>View Resume</a>
        </div>
    );
};

export default Resume;
