import React from 'react';

const styles = {
    Navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
    },
    NavigationItem: {
        margin: '0 10px',
    },
    NavigationLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

function Navigation({activePage}) {
    return (
        <nav>
            <ul style={styles.Navigation}>
                <li style={styles.NavigationItem} className={activePage === 'about' ? 'active' : ''}>
                    <a href="#about" style={styles.NavigationLink}>
                        About
                    </a>
                </li>
                <li style={styles.NavigationItem} className={activePage === 'portfolio' ? 'active' : ''}>
                    <a href="#portfolio" style={styles.NavigationLink}>
                        Portfolio
                    </a>
                </li>
                <li style={styles.NavigationItem} className={activePage === 'contact' ? 'active' : ''}>
                    <a href="#contact" style={styles.NavigationLink}>
                        Contact
                    </a>
                </li>
                <li style={styles.NavigationItem} className={activePage === 'resume' ? 'active' : ''}>
                    <a href="#resume" style={styles.NavigationLink}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;