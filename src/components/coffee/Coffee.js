import React from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';
const Coffee = () => {
  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
  );
  return (
    <mesh
      onClick={() => handleZoom('COFFEE')}
      onPointerMissed={handleUnzoom}
      name='coffee'
      geometry={nodes.Cup.geometry}
      material={nodes.Cup.material}>
      <mesh
        onClick={() => handleZoom('COFFEE')}
        onPointerMissed={handleUnzoom}
        name='coffee'
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        material-transparent
        material-opacity={0.84}
        material-color={'#c2a289'}
      />
    </mesh>
  );
};

useGLTF.preload(
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
);

export default Coffee;
