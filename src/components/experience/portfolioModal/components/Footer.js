import { useContext } from 'react';
import { ZoomContext } from '../../../../context/ZoomContext';
import BtnPrimary from '../../../shared/BtnPrimary';
import LeftArrow from './icons/leftArrow';

const Footer = ({
  modal,
  setModal,
  handleZoom,
  handleUnzoom,
  activeObject,
  setActiveObject,
}) => {
  const navList = {
    DEFAULT_CAMERA: 'SCREEN',
    SCREEN: 'PHONE',
    PHONE: 'SHOE',
    SHOE: 'PLANET',
    PLANET: 'SPACEMAN',
    SPACEMAN: 'DEFAULT_CAMERA',
  };

  const handleNext = (e) => {
    setModal({ ...modal, open: false });
    setActiveObject(navList[activeObject]);
    handleZoom(navList[activeObject]);
    e.stopPropagation();
  };

  return (
    <div className='footer-container'>
      <div className='footer-btn-container'>
        <div className='previous-btn-container'>
          <LeftArrow style={{ scale: 0.15 }} />
          <button className='previous-button'>Previous</button>
        </div>
        <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
      </div>
    </div>
  );
};

export default Footer;
