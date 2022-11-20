import { Billboard, Float, Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import PortfolioModal from '../components/experience/portfolioModal/PortfolioModal';
import Iframe from '../components/iframe/Iframe';

const useModal = () => {
  const [modal, setModal] = useState(false);

  const popUpModal = () => {
    return (
      <>
        {modal && (
          <>
            <Billboard follow={false} lockX={true} lockY={true} lockZ={true}>
              <Html>
                <PortfolioModal />
                <Iframe />
              </Html>
            </Billboard>
          </>
        )}{' '}
      </>
    );
  };

  return {
    modal,
    setModal,
    popUpModal,
  };
};

export default useModal;
