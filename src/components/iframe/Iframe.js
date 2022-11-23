import Activities from './components/Activities';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';

import './Iframe.css';
import { useState } from 'react';
import BrowserHeader from './components/BrowserHeader';

const Iframe = ({ activeObject, handleZoom, handleUnzoom }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (!clicked) {
          handleZoom('SCREEN');
          setClicked(!clicked);
        } else {
          handleUnzoom();
          setClicked(!clicked);
        }
      }}
      className={'i-container'}>
      <BrowserHeader />
      <div style={{ paddingLeft: '2rem' }}>
        <Header />
        <Contact />
        <Activities />
        <Projects />
        <Publications />
        <Education />
      </div>
    </div>
  );
};

export default Iframe;
