import Activities from './components/Activities';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';

import './Iframe.css';

const Iframe = ({ handleZoom, handleUnzoom }) => {
  return (
    <div
      onClick={() => handleZoom('SCREEN')}
      onPointerMissed={() => handleUnzoom()}
      className={'i-container'}>
      <Header />
      <Contact />
      <Activities />
      <Projects />
      <Publications />
      <Education />
    </div>
  );
};

export default Iframe;
