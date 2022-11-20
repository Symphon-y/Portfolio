import { Billboard, Float, Html } from '@react-three/drei';
import { useState, useEffect, useContext } from 'react';
import PortfolioModal from '../components/experience/portfolioModal/PortfolioModal';
import Iframe from '../components/iframe/Iframe';
import { ZoomContextProvider } from '../context/ZoomContextProvider';

const useModal = () => {
  const [modal, setModal] = useState({
    open: false,
    position: null,
  });

  const popUpModal = () => {
    return (
      <>
        {modal.open && (
          <>
            <Billboard
              follow={true}
              lockX={true}
              lockY={true}
              lockZ={true}
              position={modal.position}>
              <Html>
                <PortfolioModal />
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
