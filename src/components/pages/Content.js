import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Content({ activePage }) {
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

  return <div className="Content">{pageComponent}</div>;
}

export default Content;