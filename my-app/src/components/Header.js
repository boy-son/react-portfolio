import React from 'react';
import Navigation from './Navigation';

const styles = {
    Header: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'left',
        padding: '10px'
    },
};

function Header({activePage}) {
    return (
       <header style={styles.Header}>
            <h1>Branden Wheat</h1>
            <img src="my-app\src\assets\sleepingbeauty.jpg" alt="Sleeping Beauty Header"/>
            <Navigation activePage={activePage}/>
        </header>
       
    );
};

export default Header;