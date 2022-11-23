import Header from './components/Header';

import Footer from './components/Footer';

import './portfoliomodal.css';
import { useState } from 'react';
import LingoLingo from './components/LingoLingo';
import SoleInc from './components/SoleInc';
import SupernovaInfo from './components/SupernovaInfo';
import AboutMe from './components/AboutMe';
import CloseX from './components/icons/CloseX';

const PortfolioModal = ({
  handleZoom,
  handleUnzoom,
  activeObject,
  setActiveObject,
  modal,
  setModal,
}) => {
  const [clicked, setClicked] = useState(false);
  const content = () => {
    switch (activeObject) {
      case 'PHONE':
        return <LingoLingo />;
      case 'SHOE':
        return <SoleInc />;
      case 'PLANET':
        return <SupernovaInfo />;
      case 'SPACEMAN':
        return <AboutMe />;
      default:
        return <div>default</div>;
    }
  };
  return (
    <div className='modal-container'>
      <div className='modal-close-container'>
        <CloseX style={{ fill: '#212121', height: '1.5rem' }} />
      </div>
      {content()}
      <Footer
        modal={modal}
        setModal={setModal}
        handleZoom={handleZoom}
        handleUnzoom={handleUnzoom}
        activeObject={activeObject}
        setActiveObject={setActiveObject}
      />
    </div>
  );
};

export default PortfolioModal;
