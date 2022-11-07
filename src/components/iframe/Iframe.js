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
      className={'i-container'}
      onClick={() => {
        handleZoom('SCREEN');
      }}
      onPointerMissed={handleUnzoom}>
      <Header handleZoom={handleZoom} />
      <Contact handleZoom={handleZoom} />
      <Activities handleZoom={handleZoom} />
      <Projects handleZoom={handleZoom} />
      <Publications handleZoom={handleZoom} />
      <Education handleZoom={handleZoom} />
    </div>
  );
};

export default Iframe;
