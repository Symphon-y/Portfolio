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
  // TODO: Extract this?
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
  // TODO: Extract this??
  let style;
  switch (activeObject) {
    default:
      style = 'btn-primary btn-lingolingo';
      break;
    case 'PHONE':
      style = 'btn-primary btn-lingolingo';
      break;
    case 'SHOE':
      style = 'btn-primary btn-soleinc';
      break;
    case 'PLANET':
      style = 'btn-primary btn-supernova';
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
        <BtnPrimary onClick={handleNext} className={style}>
          {activeObject !== 'SPACEMAN' ? 'Next' : 'Home'}
        </BtnPrimary>
      </div>
    </div>
  );
};

export default Footer;
