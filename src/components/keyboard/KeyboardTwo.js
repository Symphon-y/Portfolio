import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import ZoomWrapper from '../zoom-wrapper/ZoomWrapper';

const Keyboard = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/keyboard.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <ZoomWrapper x={-0.1} y={-0.1} z={-0.1}>
      <group name='Scene'>
        <mesh
          name='plate'
          castShadow
          receiveShadow
          geometry={nodes.plate.geometry}
          material={materials.plate}
          position={[0.00134338, -0.01323594, -0.00115875]}
          userData={{ name: 'plate' }}
        />
        <group
          name='Cube020'
          position={[-0.06279859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.020' }}>
          <mesh
            name='Cube070_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube070_1.geometry}
            material={materials['switch bottom.001']}
          />
          <mesh
            name='Cube070_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube070_2.geometry}
            material={materials['switch.001']}
          />
        </group>
        <group
          name='Cube021'
          position={[-0.07955249, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.021' }}>
          <mesh
            name='Cube071_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube071_1.geometry}
            material={materials['switch bottom.002']}
          />
          <mesh
            name='Cube071_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube071_2.geometry}
            material={materials['switch.002']}
          />
        </group>
        <group
          name='Cube022'
          position={[-0.09629859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.022' }}>
          <mesh
            name='Cube072_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube072_1.geometry}
            material={materials['switch bottom.003']}
          />
          <mesh
            name='Cube072_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube072_2.geometry}
            material={materials['switch.003']}
          />
        </group>
        <group
          name='Cube023'
          position={[-0.09029859, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.023' }}>
          <mesh
            name='Cube073_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube073_1.geometry}
            material={materials['switch bottom.004']}
          />
          <mesh
            name='Cube073_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube073_2.geometry}
            material={materials['switch.004']}
          />
        </group>
        <group
          name='Cube024'
          position={[-0.09179859, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.024' }}>
          <mesh
            name='Cube074_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube074_1.geometry}
            material={materials['switch bottom.005']}
          />
          <mesh
            name='Cube074_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube074_2.geometry}
            material={materials['switch.005']}
          />
        </group>
        <group
          name='Cube025'
          position={[-0.09429859, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.025' }}>
          <mesh
            name='Cube075_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube075_1.geometry}
            material={materials['switch bottom.006']}
          />
          <mesh
            name='Cube075_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube075_2.geometry}
            material={materials['switch.006']}
          />
        </group>
        <group
          name='Cube026'
          position={[-0.09729859, -0.00500759, -0.03002318]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.026' }}>
          <mesh
            name='Cube076_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube076_1.geometry}
            material={materials['switch bottom.007']}
          />
          <mesh
            name='Cube076_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube076_2.geometry}
            material={materials['switch.007']}
          />
        </group>
        <group
          name='Cube019'
          position={[-0.07729859, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.019' }}>
          <mesh
            name='Cube077_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube077_1.geometry}
            material={materials['switch bottom.008']}
          />
          <mesh
            name='Cube077_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube077_2.geometry}
            material={materials['switch.008']}
          />
        </group>
        <group
          name='Cube027'
          position={[-0.07229859, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.027' }}>
          <mesh
            name='Cube078_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube078_1.geometry}
            material={materials['switch bottom.009']}
          />
          <mesh
            name='Cube078_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube078_2.geometry}
            material={materials['switch.009']}
          />
        </group>
        <group
          name='Cube028'
          position={[-0.06729859, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.028' }}>
          <mesh
            name='Cube079_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube079_1.geometry}
            material={materials['switch bottom.010']}
          />
          <mesh
            name='Cube079_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube079_2.geometry}
            material={materials['switch.010']}
          />
        </group>
        <group
          name='Cube029'
          position={[-0.04479859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.029' }}>
          <mesh
            name='Cube080_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube080_1.geometry}
            material={materials['switch bottom.011']}
          />
          <mesh
            name='Cube080_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube080_2.geometry}
            material={materials['switch.011']}
          />
        </group>
        <group
          name='Cube030'
          position={[0.02420142, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.030' }}>
          <mesh
            name='Cube081'
            castShadow
            receiveShadow
            geometry={nodes.Cube081.geometry}
            material={materials['switch bottom.012']}
          />
          <mesh
            name='Cube081_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube081_1.geometry}
            material={materials['switch.012']}
          />
        </group>
        <group
          name='Cube031'
          position={[0.04320142, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.031' }}>
          <mesh
            name='Cube082'
            castShadow
            receiveShadow
            geometry={nodes.Cube082.geometry}
            material={materials['switch bottom.013']}
          />
          <mesh
            name='Cube082_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube082_1.geometry}
            material={materials['switch.013']}
          />
        </group>
        <group
          name='Cube032'
          position={[0.05970141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.032' }}>
          <mesh
            name='Cube083'
            castShadow
            receiveShadow
            geometry={nodes.Cube083.geometry}
            material={materials['switch bottom.014']}
          />
          <mesh
            name='Cube083_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube083_1.geometry}
            material={materials['switch.014']}
          />
        </group>
        <group
          name='Cube033'
          position={[0.07620141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.033' }}>
          <mesh
            name='Cube084'
            castShadow
            receiveShadow
            geometry={nodes.Cube084.geometry}
            material={materials['switch bottom.015']}
          />
          <mesh
            name='Cube084_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube084_1.geometry}
            material={materials['switch.015']}
          />
        </group>
        <group
          name='Cube034'
          position={[0.09570141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.034' }}>
          <mesh
            name='Cube085'
            castShadow
            receiveShadow
            geometry={nodes.Cube085.geometry}
            material={materials['switch bottom.016']}
          />
          <mesh
            name='Cube085_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube085_1.geometry}
            material={materials['switch.016']}
          />
        </group>
        <group
          name='Cube035'
          position={[0.08770142, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.035' }}>
          <mesh
            name='Cube086'
            castShadow
            receiveShadow
            geometry={nodes.Cube086.geometry}
            material={materials['switch bottom.017']}
          />
          <mesh
            name='Cube086_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube086_1.geometry}
            material={materials['switch.017']}
          />
        </group>
        <group
          name='Cube036'
          position={[0.09270142, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.036' }}>
          <mesh
            name='Cube087'
            castShadow
            receiveShadow
            geometry={nodes.Cube087.geometry}
            material={materials['switch bottom.018']}
          />
          <mesh
            name='Cube087_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube087_1.geometry}
            material={materials['switch.018']}
          />
        </group>
        <group
          name='Cube037'
          position={[0.09720142, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.037' }}>
          <mesh
            name='Cube088'
            castShadow
            receiveShadow
            geometry={nodes.Cube088.geometry}
            material={materials['switch bottom.019']}
          />
          <mesh
            name='Cube088_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube088_1.geometry}
            material={materials['switch.019']}
          />
        </group>
        <group
          name='Cube038'
          position={[0.09470141, -0.00500759, -0.03002318]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.038' }}>
          <mesh
            name='Cube024_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials['switch bottom']}
          />
          <mesh
            name='Cube024_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials['switch']}
          />
        </group>
        <mesh
          name='Cube'
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['keycaps2.001']}
          position={[-0.09729859, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube' }}
        />
        <mesh
          name='Cube001'
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['keycaps2.002']}
          position={[-0.07229859, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.001' }}
        />
        <mesh
          name='Cube002'
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['keycaps2.003']}
          position={[-0.06729859, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.002' }}
        />
        <mesh
          name='Cube003'
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['keycaps.001']}
          position={[-0.09473687, 0.00162915, -0.01492494]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.003' }}
        />
        <mesh
          name='Cube004'
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['keycaps2.004']}
          position={[-0.0772986, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.004' }}
        />
        <mesh
          name='Cube005'
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['keycaps.002']}
          position={[-0.09223933, 0.0009753, 0.00005654]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.005' }}
        />
        <mesh
          name='Cube006'
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['keycaps.001']}
          position={[-0.08969236, 0.00028382, 0.01503743]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.006' }}
        />
        <mesh
          name='Cube007'
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['keycaps.004']}
          position={[-0.0101736, -0.00018264, 0.03002318]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.007' }}
        />
        <mesh
          name='Cube008'
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['keycaps.005']}
          position={[-0.0963335, -0.00082607, 0.03001072]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.008' }}
        />
        <mesh
          name='Cube009'
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['keycaps.006']}
          position={[-0.07954678, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.009' }}
        />
        <mesh
          name='Cube010'
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['keycaps.007']}
          position={[-0.06276722, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.010' }}
        />
        <mesh
          name='Cube011'
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['keycaps.008']}
          position={[0.0764515, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.011' }}
        />
        <mesh
          name='Cube012'
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['keycaps.009']}
          position={[0.05967194, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.012' }}
        />
        <mesh
          name='Cube013'
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['keycaps.010']}
          position={[0.04288521, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.013' }}
        />
        <mesh
          name='Cube014'
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['keycaps.011']}
          position={[0.09589116, -0.00065773, 0.03001444]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.014' }}
        />
        <mesh
          name='Cube015'
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['keycaps.012']}
          position={[0.09729859, 0.00162915, -0.01492494]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.015' }}
        />
        <mesh
          name='Cube016'
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['keycaps.013']}
          position={[0.09432064, 0.00253688, -0.02940276]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.016' }}
        />
        <mesh
          name='Cube017'
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['keycaps.014']}
          position={[0.09277438, 0.00105213, 0.00005773]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.017' }}
        />
        <mesh
          name='Cube018'
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.keycaps}
          position={[0.0882763, 0.00038399, 0.01503898]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.018' }}
        />
        <mesh
          name='Cube039'
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials['keycaps2.005']}
          position={[-0.08299859, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.039' }}
        />
        <mesh
          name='Cube040'
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials['keycaps2.006']}
          position={[-0.06869859, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.040' }}
        />
        <mesh
          name='Cube041'
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials['keycaps2.007']}
          position={[-0.05439859, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.041' }}
        />
        <mesh
          name='Cube042'
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials['keycaps2.008']}
          position={[-0.0400986, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.042' }}
        />
        <mesh
          name='Cube043'
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials['keycaps2.009']}
          position={[-0.0257986, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.043' }}
        />
        <mesh
          name='Cube044'
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials['keycaps2.010']}
          position={[-0.01149859, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.044' }}
        />
        <mesh
          name='Cube045'
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials['keycaps2.011']}
          position={[0.0028014, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.045' }}
        />
        <mesh
          name='Cube046'
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials['keycaps2.012']}
          position={[0.01710142, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.046' }}
        />
        <mesh
          name='Cube047'
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials['keycaps2.013']}
          position={[0.03140141, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.047' }}
        />
        <mesh
          name='Cube048'
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials['keycaps2.014']}
          position={[0.04570143, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.048' }}
        />
        <mesh
          name='Cube049'
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials['keycaps2.015']}
          position={[0.06000142, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.049' }}
        />
        <mesh
          name='Cube050'
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials['keycaps2.016']}
          position={[0.07430142, 0.00220405, -0.02940938]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.050' }}
        />
        <mesh
          name='Cube051'
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials['keycaps2.017']}
          position={[-0.05799859, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.051' }}
        />
        <mesh
          name='Cube052'
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials['keycaps2.018']}
          position={[-0.04369859, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.052' }}
        />
        <mesh
          name='Cube053'
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials['keycaps2.019']}
          position={[-0.02939859, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.053' }}
        />
        <mesh
          name='Cube054'
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials['keycaps2.020']}
          position={[-0.0150986, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.054' }}
        />
        <mesh
          name='Cube055'
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials['keycaps2.021']}
          position={[-0.0007986, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.055' }}
        />
        <mesh
          name='Cube056'
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials['keycaps2.022']}
          position={[0.01350141, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.056' }}
        />
        <mesh
          name='Cube057'
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials['keycaps2.023']}
          position={[0.0278014, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.057' }}
        />
        <mesh
          name='Cube058'
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials['keycaps2.024']}
          position={[0.04210142, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.058' }}
        />
        <mesh
          name='Cube059'
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials['keycaps2.025']}
          position={[0.05640141, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.059' }}
        />
        <mesh
          name='Cube060'
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials['keycaps2.026']}
          position={[0.07070143, 0.00066014, 0.00005019]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.060' }}
        />
        <mesh
          name='Cube061'
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials['keycaps2.027']}
          position={[-0.05299859, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.061' }}
        />
        <mesh
          name='Cube062'
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials['keycaps2.028']}
          position={[-0.03869859, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.062' }}
        />
        <mesh
          name='Cube063'
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials['keycaps2.029']}
          position={[-0.02439859, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.063' }}
        />
        <mesh
          name='Cube064'
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials['keycaps2.030']}
          position={[-0.0100986, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.064' }}
        />
        <mesh
          name='Cube065'
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials['keycaps2.031']}
          position={[0.0042014, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.065' }}
        />
        <mesh
          name='Cube066'
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials['keycaps2.032']}
          position={[0.01850141, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.066' }}
        />
        <mesh
          name='Cube067'
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials['keycaps2.033']}
          position={[0.0328014, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.067' }}
        />
        <mesh
          name='Cube068'
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials['keycaps2.034']}
          position={[0.04710142, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.068' }}
        />
        <mesh
          name='Cube069'
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials['keycaps2.035']}
          position={[0.06140141, -0.0001249, 0.01502963]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.069' }}
        />
        <mesh
          name='Cube070'
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials['keycaps2.036']}
          position={[-0.06299859, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.070' }}
        />
        <mesh
          name='Cube071'
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials['keycaps2.037']}
          position={[-0.0486986, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.071' }}
        />
        <mesh
          name='Cube072'
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={materials['keycaps2.038']}
          position={[-0.0343986, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.072' }}
        />
        <mesh
          name='Cube073'
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={materials['keycaps2.039']}
          position={[-0.0200986, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.073' }}
        />
        <mesh
          name='Cube074'
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials['keycaps2.040']}
          position={[-0.0057986, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.074' }}
        />
        <mesh
          name='Cube075'
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials['keycaps2.041']}
          position={[0.0085014, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.075' }}
        />
        <mesh
          name='Cube076'
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials['keycaps2.042']}
          position={[0.0228014, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.076' }}
        />
        <mesh
          name='Cube077'
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials['keycaps2.043']}
          position={[0.03710142, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.077' }}
        />
        <mesh
          name='Cube078'
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={materials['keycaps2.044']}
          position={[0.05140141, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.078' }}
        />
        <mesh
          name='Cube079'
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials['keycaps2.045']}
          position={[0.06570143, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.079' }}
        />
        <mesh
          name='Cube080'
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={materials.keycaps2}
          position={[0.08000141, 0.00144518, -0.01492925]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.080' }}
        />
      </group>
    </ZoomWrapper>
  );
};

useGLTF.preload('/keyboard.glb');

export default Keyboard;
