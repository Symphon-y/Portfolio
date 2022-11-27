import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';

const Coffee = ({ onHover, hovered, modal, setModal }) => {
  const { handleZoom, handleUnzoom } = useZoom();

  // Hover State For Zoom
  const [hover, setHover] = useState(false);

  // Ref for glow effect
  const meshRef = useRef();
  const { nodes } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
  );

  return (
    <group
      onClick={() => {
        if (!modal.open) {
          handleZoom('COFFEE');
          // setModal({ open: !modal.open, position: [5, 3.55, -3] });
        } else {
          handleUnzoom();
          // setModal({ ...modal, open: false });
        }
      }}
      onPointerMissed={() => {
        handleUnzoom();
        // setModal({ ...modal, open: false });
      }}
      onPointerOver={(e) => onHover(meshRef)}
      onPointerOut={(e) => onHover(null)}>
      <mesh
        name='coffee'
        geometry={nodes.Cup.geometry}
        material={nodes.Cup.material}
        ref={meshRef}>
        <mesh
          name='coffee'
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          material-transparent
          material-opacity={0.84}
          material-color={'#c2a289'}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload(
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
);

export default Coffee;
