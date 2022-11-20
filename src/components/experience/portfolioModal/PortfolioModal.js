import Header from './components/Header';

import Footer from './components/Footer';

import './PortfolioModal.css';
import { useState } from 'react';

const PortfolioModal = ({ activeObject, setActiveObject, modal, setModal }) => {
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
      <Footer activeObject={activeObject} setActiveObject={setActiveObject} />
    </div>
  );
};

export default PortfolioModal;
