import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';

const Supernova = ({
  hovered,
  onHover,
  activeObject,
  setActiveObject,
  modal,
  setModal,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes, materials } = useGLTF('/space_exploration_wlp_series_8.glb');
  // Ref for glow effect
  const meshRef = useRef();
  useEffect(() => {
    if (activeObject === 'PLANET' && !modal.open) {
      setModal({
        open: !modal.open,
        position: [-400.26, 120.0, 50],
      });
    }
  }, [modal.open, setModal, activeObject]);
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => {
        if (!modal.open) {
          handleZoom('PLANET');
          setModal({
            open: !modal.open,
            position: [-400.26, 120.0, 50],
          });
        } else {
          handleUnzoom();
          setModal({ ...modal, open: false });
        }
      }}
      onPointerMissed={() => {
        handleUnzoom();
        setModal({ ...modal, open: false });
      }}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0, 0.02, -6.33]}
          rotation={[0.24, -0.55, 0.56]}
          scale={7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_1.geometry}
            material={materials.scene}
            ref={meshRef}
            onPointerOver={(e) => onHover(meshRef)}
            onPointerOut={(e) => onHover(null)}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_2.geometry}
            material={materials.scene}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/space_exploration_wlp_series_8.glb');

export default Supernova;
