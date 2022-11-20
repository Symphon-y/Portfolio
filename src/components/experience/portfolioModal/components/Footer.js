import { useContext } from 'react';
import { ZoomContext } from '../../../../context/ZoomContext';
import LeftArrow from './icons/leftArrow';

const Footer = ({ activeObject, setActiveObject }) => {
  const navList = {
    DEFAULT_CAMERA: 'SCREEN',
    SCREEN: 'PHONE',
    PHONE: 'SHOE',
    SHOE: 'PLANET',
    PLANET: 'SPACEMAN',
    SPACEMAN: 'DEFAULT_CAMERA',
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveObject(navList[activeObject]);
    alert(activeObject);
  };
  return (
    <div className='footer-container'>
      <div className='footer-btn-container'>
        <div className='previous-btn-container'>
          <LeftArrow style={{ scale: 0.15 }} />
          <button className='previous-button'>Previous</button>
        </div>
        <button onClick={handleNext} className='next-button'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;
