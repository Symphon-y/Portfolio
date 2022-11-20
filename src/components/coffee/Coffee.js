import React from 'react';
import { Html, useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';
import useModal from '../../hooks/useModal';

const Coffee = ({ modal, setModal }) => {
  // const { modal, setModal, popUpModal } = useModal();
  const { handleZoom, handleUnzoom } = useZoom();

  const { nodes } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
  );
  return (
    <>
      <mesh
        onClick={() => {
          setModal(!modal);
          handleZoom('COFFEE');
        }}
        onPointerMissed={handleUnzoom}
        name='coffee'
        geometry={nodes.Cup.geometry}
        material={nodes.Cup.material}>
        <mesh
          onClick={() => {
            setModal(!modal);
            handleZoom('COFFEE');
          }}
          onPointerMissed={() => {
            handleUnzoom();
            setModal(!modal);
          }}
          name='coffee'
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          material-transparent
          material-opacity={0.84}
          material-color={'#c2a289'}
        />
      </mesh>
    </>
  );
};

useGLTF.preload(
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
);

export default Coffee;
