/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NANDA KUMAR (https://sketchfab.com/Nandakumar000)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/solar-system-b6b69a95a6f0426bb8bbc2e8cb7ff46a
title: Solar System
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const SolarSystem = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/solar_system.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {});
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.07}>
          <group
            name='38ff7a53c55e4d9881cb731fb8374077fbx'
            rotation={[Math.PI / 2, 0, 0]}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='sun' scale={4}>
                  <group name='mercury_1' rotation={[0, -0.67, 0]}>
                    <group
                      name='mercury'
                      position={[1.5, 0, 0]}
                      rotation={[-Math.PI, 1.2, -Math.PI]}
                      scale={0.05}>
                      <group
                        name='moon1'
                        position={[-2.03, 0, 1.03]}
                        rotation={[0, 0.47, 0]}
                        scale={0.5}>
                        <mesh
                          name='moon1_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon1_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group
                        name='moon2'
                        position={[1.85, 0, -0.94]}
                        rotation={[0, 0.47, 0]}
                        scale={0.5}>
                        <mesh
                          name='moon2_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon2_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='mercury_mercury1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.mercury_mercury1_0.geometry}
                        material={materials.mercury1}
                      />
                    </group>
                  </group>
                  <group name='venus_1' rotation={[-Math.PI, -0.15, -Math.PI]}>
                    <group
                      name='venus'
                      position={[2, 0, 0]}
                      rotation={[-Math.PI, -0.44, Math.PI]}
                      scale={0.13}>
                      <group name='moon3' position={[-1.43, 0, 0]} scale={0.2}>
                        <mesh
                          name='moon3_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon3_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon4' position={[1.38, 0, 0]} scale={0.2}>
                        <mesh
                          name='moon4_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon4_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='venus_venus1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.venus_venus1_0.geometry}
                        material={materials.venus1}
                      />
                    </group>
                  </group>
                  <group name='earth_1' rotation={[0, 0.44, 0]}>
                    <group
                      name='earth'
                      position={[2.5, 0, 0]}
                      rotation={[-Math.PI, -0.43, -Math.PI]}
                      scale={0.13}>
                      <group name='moon' position={[-1.42, 0, 0]} scale={0.2}>
                        <mesh
                          name='moon_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon5' position={[1.42, 0, 0]} scale={0.2}>
                        <mesh
                          name='moon5_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon5_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='earth_earth1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.earth_earth1_0.geometry}
                        material={materials.earth1}
                      />
                    </group>
                  </group>
                  <group name='mars_1' rotation={[0, -1.46, 0]}>
                    <group
                      name='mars'
                      position={[3, 0, 0]}
                      rotation={[-Math.PI, -0.69, -Math.PI]}
                      scale={0.1}>
                      <group name='moon6' position={[-1.59, 0, 0]} scale={0.25}>
                        <mesh
                          name='moon6_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon6_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon7' position={[1.55, 0, 0]} scale={0.25}>
                        <mesh
                          name='moon7_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon7_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='mars_mars1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.mars_mars1_0.geometry}
                        material={materials.mars1}
                      />
                    </group>
                  </group>
                  <group name='jupiter_1' rotation={[-Math.PI, 0.46, -Math.PI]}>
                    <group
                      name='jupiter'
                      position={[3.75, 0, 0]}
                      rotation={[-Math.PI, -0.68, Math.PI]}
                      scale={0.25}>
                      <group name='moon8' position={[-1.24, 0, 0]} scale={0.1}>
                        <mesh
                          name='moon8_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon8_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon9' position={[1.19, 0, 0]} scale={0.1}>
                        <mesh
                          name='moon9_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon9_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='jupiter_jupiter1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.jupiter_jupiter1_0.geometry}
                        material={materials.jupiter1}
                      />
                    </group>
                  </group>
                  <group name='saturn_1' rotation={[-Math.PI, 1.41, -Math.PI]}>
                    <group
                      name='saturn'
                      position={[4.5, 0, 0]}
                      rotation={[Math.PI, -0.43, -Math.PI]}
                      scale={0.22}>
                      <group
                        name='moon10'
                        position={[-1.71, 0, 0]}
                        scale={0.11}>
                        <mesh
                          name='moon10_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon10_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon11' position={[1.72, 0, 0]} scale={0.11}>
                        <mesh
                          name='moon11_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon11_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='saturn_ring' scale={[1.11, 0.22, 1.11]}>
                        <mesh
                          name='saturn_ring_saturn1_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.saturn_ring_saturn1_0.geometry}
                          material={materials.saturn1}
                        />
                      </group>
                      <mesh
                        name='saturn_saturn1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.saturn_saturn1_0.geometry}
                        material={materials.saturn1}
                      />
                    </group>
                  </group>
                  <group name='uranus_1' rotation={[-Math.PI, -1.24, -Math.PI]}>
                    <group
                      name='uranus'
                      position={[5.25, 0, 0]}
                      rotation={[-Math.PI, -0.44, Math.PI]}
                      scale={0.17}>
                      <group
                        name='moon12'
                        position={[-1.27, 0, 0]}
                        scale={0.14}>
                        <mesh
                          name='moon12_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon12_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon13' position={[1.24, 0, 0]} scale={0.14}>
                        <mesh
                          name='moon13_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon13_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='uranus_uranus1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.uranus_uranus1_0.geometry}
                        material={materials.uranus1}
                      />
                    </group>
                  </group>
                  <group
                    name='neptune_1'
                    rotation={[-Math.PI, -1.24, -Math.PI]}>
                    <group
                      name='neptune'
                      position={[5.75, 0, 0]}
                      rotation={[-Math.PI, -0.43, -Math.PI]}
                      scale={0.17}>
                      <group name='moon14' position={[-1.2, 0, 0]} scale={0.14}>
                        <mesh
                          name='moon14_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon14_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon15' position={[1.24, 0, 0]} scale={0.14}>
                        <mesh
                          name='moon15_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon15_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='neptune_neptune1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.neptune_neptune1_0.geometry}
                        material={materials.neptune1}
                      />
                    </group>
                  </group>
                  <group name='pluto_1' rotation={[0, -0.33, 0]}>
                    <group
                      name='pluto'
                      position={[6.25, 0, 0]}
                      rotation={[-Math.PI, -0.43, -Math.PI]}
                      scale={0.04}>
                      <group
                        name='moon16'
                        position={[-2.39, 0, 0]}
                        scale={0.67}>
                        <mesh
                          name='moon16_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon16_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <group name='moon17' position={[2.26, 0, 0]} scale={0.67}>
                        <mesh
                          name='moon17_moon18_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.moon17_moon18_0.geometry}
                          material={materials.moon18}
                        />
                      </group>
                      <mesh
                        name='pluto_pluto1_0'
                        castShadow
                        receiveShadow
                        geometry={nodes.pluto_pluto1_0.geometry}
                        material={materials.pluto1}
                      />
                    </group>
                  </group>
                  <mesh
                    name='sun_sun1_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.sun_sun1_0.geometry}
                    material={materials.sun1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/solar_system.glb');

export default SolarSystem;
