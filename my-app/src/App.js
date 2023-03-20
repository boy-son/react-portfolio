import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
    <Route
        exact
        path="/"
        element={<About/>}
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;