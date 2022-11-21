import { Billboard, Html } from '@react-three/drei';
import { useContext, useEffect } from 'react';
import { ZoomContext } from '../../../context/ZoomContext';
import useZoom from '../../../hooks/useZoom';
import PortfolioModal from './PortfolioModal';

const PopUpModal = () => {
  const { modal, setModal, activeObject, setActiveObject } =
    useContext(ZoomContext);
  const { handleZoom, handleUnzoom } = useZoom();

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
                handleZoom={handleZoom}
                handleUnzoom={handleUnzoom}
                setActiveObject={setActiveObject}
                activeObject={activeObject}
                modal={modal}
                setModal={setModal}
              />
            </Html>
          </Billboard>
        </>
      )}
    </>
  );
};

export default PopUpModal;
