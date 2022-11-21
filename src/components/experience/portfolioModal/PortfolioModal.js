import Header from './components/Header';

import Footer from './components/Footer';

import './PortfolioModal.css';
import { useState } from 'react';

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
    switch (modal.activeObject) {
      case 'PHONE':
        return <div>PHONE</div>;
      case 'SHOE':
        return <div>SHOE</div>;
      default:
        return <div>default</div>;
    }
  };
  return (
    <div className={'modal-container'}>
      <Header />
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
