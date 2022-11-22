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
    DEFAULT_CAMERA: {
      next: 'SCREEN',
      prev: 'SPACEMAN',
    },
    SCREEN: {
      next: 'PHONE',
      prev: 'DEFAULT_CAMERA',
    },
    PHONE: {
      next: 'SHOE',
      prev: 'SCREEN',
    },
    SHOE: {
      next: 'PLANET',
      prev: 'PHONE',
    },
    PLANET: {
      next: 'SPACEMAN',
      prev: 'SHOE',
    },
    SPACEMAN: {
      next: 'DEFAULT_CAMERA',
      prev: 'PLANET',
    },
  };

  const handleNext = (e) => {
    setModal({ ...modal, open: false });
    setActiveObject(navList[activeObject].next);
    handleZoom(navList[activeObject].next);
    setModal({
      open: !modal.open,
      position: [-190, 30, -155],
    });
    e.stopPropagation();
  };

  const handlePrev = (e) => {
    setModal({ ...modal, open: false });
    setActiveObject(navList[activeObject].prev);
    handleZoom(navList[activeObject].prev);
    setModal({
      open: !modal.open,
      position: [-190, 30, -155],
    });
    e.stopPropagation();
  };

  let style;
  switch (activeObject) {
    default:
      style = {};
      break;
    case 'PHONE':
      style = {};
      break;
    case 'SHOE':
      style = { backgroundColor: '#80dbd8' };
      break;
    case 'PLANET':
      style = { backgroundColor: '#80dbd8' };
      break;
  }

  return (
    <div className='footer-container'>
      <div className='footer-btn-container'>
        <div className='previous-btn-container'>
          <LeftArrow style={{ scale: 0.15 }} />
          <button className='previous-button' onClick={handlePrev}>
            Previous
          </button>
        </div>
        <BtnPrimary onClick={handleNext} style={style}>
          Next
        </BtnPrimary>
      </div>
    </div>
  );
};

export default Footer;
