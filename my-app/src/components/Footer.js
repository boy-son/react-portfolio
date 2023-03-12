import React from 'react';

const styles = {
    Footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    },
};

function Footer() {
    return (
        <footer style={styles.Footer}>
        <a href="https://github.com/boy-son" target="_blank" rel="noopener noreferrer">
        <img src="my-app/src/assets/GitHub-Mark.png" alt="Github Logo" />
      </a>
        <a href="https://www.linkedin.com/in/branden-wheat/" target="_blank" rel="noopener noreferrer">
        <img src="my-app/src/assets/In-2C-128px-TM.png" alt="LinkedIn Logo" />
        </a>
    </footer>
  );
}

export default Footer;