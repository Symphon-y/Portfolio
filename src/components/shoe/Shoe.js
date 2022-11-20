import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';
import Header from '../description/header';
import Body from '../description/body';

const Shoe = ({ modal, setModal, ...props }) => {
  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb');
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => {
        if (!modal.open) {
          handleZoom('SHOE');
          setModal({
            open: !modal.open,
            position: [-190, 30, -155],
            activeObject: 'SHOE',
          });
        } else {
          handleUnzoom();
          setModal({ ...modal, open: false });
        }
      }}
      onPointerMissed={() => {
        handleUnzoom();
        setModal({ ...modal, open: false });
      }}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.NikeShoe}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/nike_air_zoom_pegasus_36.glb');

export default Shoe;
