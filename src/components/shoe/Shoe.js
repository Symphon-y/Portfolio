import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';
import Header from '../description/header';
import Body from '../description/body';

const Shoe = ({
  onHover,
  activeObject,
  setActiveObject,
  modal,
  setModal,
  ...props
}) => {
  const { handleZoom, handleUnzoom } = useZoom();
  // Hover State For Zoom
  const [hover, setHover] = useState(false);

  // Ref for glow effect
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb');
  useEffect(() => {
    if (activeObject === 'SHOE' && !modal.open) {
      setModal({
        open: !modal.open,
        position: [-190, 30, -155],
      });
    }
  }, [modal.open, setModal, activeObject]);
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
            ref={meshRef}
            onPointerOver={(e) => onHover(meshRef)}
            onPointerOut={(e) => onHover(null)}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/nike_air_zoom_pegasus_36.glb');

export default Shoe;
