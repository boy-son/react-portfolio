import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('about');

  function handlePageChange(newPage) {
    setActivePage(newPage);
  }

  let pageComponent;

  switch (activePage) {
    case 'about':
      pageComponent = <About />;
      break;
    case 'portfolio':
      pageComponent = <Portfolio />;
      break;
    case 'contact':
      pageComponent = <Contact />;
      break;
    case 'resume':
      pageComponent = <Resume />;
      break;
    default:
      pageComponent = (
        <div>
          <h1>Page Not Found</h1>
          <p>The page you requested could not be found.</p>
        </div>
      );
  }

  return (
    <div className="App">
      <Header />
      <Navigation activePage={activePage} handlePageChange={handlePageChange} />
      <div className="Content">{pageComponent}</div>
      <Footer />
    </div>
  );
}
