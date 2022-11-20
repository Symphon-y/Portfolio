import { Billboard, Html } from '@react-three/drei';
import { useContext, useState } from 'react';
import PortfolioModal from '../components/experience/portfolioModal/PortfolioModal';
import { ZoomContext } from '../context/ZoomContext';
import useZoom from './useZoom';

const useModal = () => {
  const { modal, setModal, activeObject, setActiveObject } =
    useContext(ZoomContext);
  // const [modal, setModal] = useState({
  //   open: false,
  //   position: null,
  //   activeObject: '',
  // });

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
                <PortfolioModal
                  setActiveObject={setActiveObject}
                  activeObject={activeObject}
                  modal={modal}
                  setModal={setModal}
                />
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
