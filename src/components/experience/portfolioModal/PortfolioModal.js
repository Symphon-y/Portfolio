import Header from './components/Header';

import Footer from './components/Footer';

import './portfoliomodal.css';
import { useState } from 'react';
import LingoLingo from './components/LingoLingo';

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
        return <div>SHOE</div>;
      default:
        return <div>default</div>;
    }
  };
  return (
    <div className='modal-container'>
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
