import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Content from './components/pages/Content';

function App() {
  const [activePage, setActivePage] = useState('about');

  function handlePageChange(newPage) {
    setActivePage(newPage);
  }
  

  return (
    <div className="App">
      < Header />
      < Navigation activePage={activePage} handlePageChange={handlePageChange} />
      <Content activePage={activePage} />
      < Footer />
      </div> 
  );
}

export default App;
