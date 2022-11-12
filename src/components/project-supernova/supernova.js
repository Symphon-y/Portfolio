import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';

const Supernova = (props) => {
  const { handleZoom, handleUnzoom } = useZoom();

  const { nodes, materials } = useGLTF('/space_exploration_wlp_series_8.glb');
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => handleZoom('PLANET')}
      onPointerMissed={() => handleUnzoom()}>
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
