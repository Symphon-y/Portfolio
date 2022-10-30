import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Coffee = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/spilling-coffee/model.gltf'
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cup.geometry} material={nodes.Cup.material}>
        <mesh
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
