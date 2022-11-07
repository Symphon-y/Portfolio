import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ZoomWrapper from '../Wrappers/zoom-wrapper/ZoomWrapper';

const Coffee = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
  );
  return (
    <ZoomWrapper>
      <mesh
        name='coffee'
        geometry={nodes.Cup.geometry}
        material={nodes.Cup.material}>
        <mesh
          name='coffee'
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          material-transparent
          material-opacity={0.84}
          material-color={'#c2a289'}
        />
      </mesh>
    </ZoomWrapper>
  );
};

useGLTF.preload(
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
);

export default Coffee;
