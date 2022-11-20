import React from 'react';
import './portfoliomodal.css';

const PortfolioModal = ({ children, ...props }) => {
  return (
    <div className='portfolio-modal'>
      <div className='portfolio-modal-content'>
        <h1>Hi i am a modal</h1>
      </div>
    </div>
  );
};

export default PortfolioModal;
