import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ZoomWrapper from '../zoom-wrapper/ZoomWrapper';

const Keyboard = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/mechanical-keyboard-tenkeyless/model.gltf'
  );
  return (
    <ZoomWrapper>
      <group ref={group} {...props} dispose={null}>
        {/* Case */}
        <mesh
          name='keyboad'
          geometry={nodes.Case.geometry}
          material={nodes.Case.material}
          position={[0.59, 0, 0]}
        />
        {/* Cord */}
        <mesh
          name='keyboad'
          geometry={nodes.Keyboard_cable.geometry}
          material={nodes.Keyboard_cable.material}
          position={[0.59, 0, 0]}
        />
        {/* Keys */}
        <mesh
          name='keyboad'
          geometry={nodes.Keycaps.geometry}
          material={materials['Keycap material']}
          position={[0.59, 0, 0]}
        />
      </group>
    </ZoomWrapper>
  );
};

useGLTF.preload(
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/mechanical-keyboard-tenkeyless/model.gltf'
);

export default Keyboard;
