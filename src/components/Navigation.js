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

function Navigation({activePage, handlePageChange}) {
    return (
        <nav>
            <ul style={styles.Navigation}>
                <li style={styles.NavigationItem} className={activePage === 'about' ? 'active' : ''}>
                    <a href="#about" onClick={() => handlePageChange('About')} style={styles.NavigationLink}>
                        About
                    </a>
                </li>
                <li style={styles.NavigationItem} className={activePage === 'portfolio' ? 'active' : ''}>
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} style={styles.NavigationLink}>
                        Portfolio
                    </a>
                </li>
                <li style={styles.NavigationItem} className={activePage === 'contact' ? 'active' : ''}>
                    <a href="#contact" onClick={() => handlePageChange('Contact')} style={styles.NavigationLink}>
                        Contact
                    </a>
                </li>
                <li style={styles.NavigationItem} className={activePage === 'resume' ? 'active' : ''}>
                    <a href="#resume" onClick={() => handlePageChange('Resume')} style={styles.NavigationLink}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;