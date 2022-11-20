import Header from './components/Header';

import Footer from './components/Footer';

import './PortfolioModal.css';
import { useState } from 'react';

const PortfolioModal = ({ activeObject, handleZoom, handleUnzoom }) => {
  const [clicked, setClicked] = useState(false);

  const content = () => {
    switch (activeObject) {
      case 'PHONE':
        return <div>PHONE</div>;
      case 'SHOE':
        return <div>SHOE</div>;
      default:
        return <div>default</div>;
    }
  };
  return (
    <div
      onClick={(e) => {
        console.log(activeObject);
        e.stopPropagation();
        if (!clicked) {
          // handleZoom('SCREEN');
          setClicked(!clicked);
        } else {
          // handleUnzoom();
          setClicked(!clicked);
        }
      }}
      className={'modal-container'}>
      <Header />
      {content()}
      <Footer />
    </div>
  );
};

export default PortfolioModal;
