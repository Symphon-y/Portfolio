import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';

const Astronaught = (props) => {
  const group = useRef();
  const [clicked, isClicked] = useState(false);
  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes, materials, animations } = useGLTF(
    '/animated_floating_astronaut_in_space_suit_loop.glb'
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log('Astronaught');
    console.log(animations);
    actions.Animation.play();
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onClick={() => {
        if (clicked) {
          handleUnzoom();
          isClicked(!clicked);
        } else {
          handleZoom('SPACEMAN');
          isClicked(!clicked);
        }
      }}
      onPointerMissed={() => {
        handleUnzoom();
        isClicked(false);
      }}>
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.31}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='RootNode0_0' scale={0.01}>
                <group name='skeletal3_6'>
                  <group name='GLTF_created_0'>
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name='_3_correction'>
                      <group name='_3' />
                    </group>
                    <group name='_4_correction'>
                      <group name='_4' />
                    </group>
                    <group name='_5_correction'>
                      <group name='_5' />
                    </group>
                    <skinnedMesh
                      name='Object_103'
                      geometry={nodes.Object_103.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name='Object_99'
                      geometry={nodes.Object_99.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name='Object_100'
                      geometry={nodes.Object_100.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <skinnedMesh
                      name='Object_106'
                      geometry={nodes.Object_106.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_106.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/animated_floating_astronaut_in_space_suit_loop.glb');

export default Astronaught;
