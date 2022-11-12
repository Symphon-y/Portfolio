import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';

const Shoe = (props) => {
  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb');
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => handleZoom('SHOE')}
      onPointerMissed={() => handleUnzoom()}>
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
