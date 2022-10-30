import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Keyboard = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/mechanical-keyboard-tenkeyless/model.gltf'
  );
  return (
    <group ref={group} {...props} dispose={null}>
      {/* Case */}
      <mesh
        geometry={nodes.Case.geometry}
        material={nodes.Case.material}
        position={[0.59, 0, 0]}
      />
      {/* Cord */}
      <mesh
        geometry={nodes.Keyboard_cable.geometry}
        material={nodes.Keyboard_cable.material}
        position={[0.59, 0, 0]}
      />
      {/* Keys */}
      <mesh
        geometry={nodes.Keycaps.geometry}
        material={materials['Keycap material']}
        position={[0.59, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/mechanical-keyboard-tenkeyless/model.gltf'
);

export default Keyboard;
