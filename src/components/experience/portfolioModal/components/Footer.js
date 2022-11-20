import LeftArrow from './icons/leftArrow';

const Footer = ({ activeObject }) => {
  const navList = {
    DEFAULT_CAMERA: 'SCREEN',
    SCREEN: 'PHONE',
    PHONE: 'SHOE',
    SHOE: 'PLANET',
    PLANET: 'SPACEMAN',
  };

  const handleNext = () => {};
  return (
    <div className='footer-container'>
      <div className='footer-btn-container'>
        <div className='previous-btn-container'>
          <LeftArrow style={{ scale: 0.15 }} />
          <button className='previous-button'>Previous</button>
        </div>
        <button className='next-button'>Next</button>
      </div>
    </div>
  );
};

export default Footer;
