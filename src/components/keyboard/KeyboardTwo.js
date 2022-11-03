import React, { useRef, useEffect, useContext } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import ZoomWrapper from '../zoom-wrapper/ZoomWrapper';
import { useSpring, animated, config } from '@react-spring/three';
import { KeyboardContext } from '../../context/KeyboardContext';

const Keyboard = (props) => {
  const key = useContext(KeyboardContext);

  //SECTION - Refs
  const group = useRef();

  const { nodes, materials, animations } = useGLTF('/keyboard.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keypress = e.code;
      console.log(keypress);
      if (key[`set${keypress}`]) {
        key[`set${keypress}`](keypress);
      }
    };
    const handleKeyUp = (e) => {
      const keypress = e.code;
      if (key[`set${keypress}`]) {
        key[`set${keypress}`](false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [key]);

  return (
    <ZoomWrapper x={-0.1} y={-0.1} z={-0.1}>
      <group name='Scene'>
        <animated.mesh
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
          <animated.mesh
            name='Cube070_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube070_1.geometry}
            material={materials['switch bottom.001']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube071_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube071_1.geometry}
            material={materials['switch bottom.002']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube072_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube072_1.geometry}
            material={materials['switch bottom.003']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube073_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube073_1.geometry}
            material={materials['switch bottom.004']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube074_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube074_1.geometry}
            material={materials['switch bottom.005']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube075_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube075_1.geometry}
            material={materials['switch bottom.006']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube076_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube076_1.geometry}
            material={materials['switch bottom.007']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube077_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube077_1.geometry}
            material={materials['switch bottom.008']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube078_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube078_1.geometry}
            material={materials['switch bottom.009']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube079_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube079_1.geometry}
            material={materials['switch bottom.010']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube080_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube080_1.geometry}
            material={materials['switch bottom.011']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube081'
            castShadow
            receiveShadow
            geometry={nodes.Cube081.geometry}
            material={materials['switch bottom.012']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube082'
            castShadow
            receiveShadow
            geometry={nodes.Cube082.geometry}
            material={materials['switch bottom.013']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube083'
            castShadow
            receiveShadow
            geometry={nodes.Cube083.geometry}
            material={materials['switch bottom.014']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube084'
            castShadow
            receiveShadow
            geometry={nodes.Cube084.geometry}
            material={materials['switch bottom.015']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube085'
            castShadow
            receiveShadow
            geometry={nodes.Cube085.geometry}
            material={materials['switch bottom.016']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube086'
            castShadow
            receiveShadow
            geometry={nodes.Cube086.geometry}
            material={materials['switch bottom.017']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube087'
            castShadow
            receiveShadow
            geometry={nodes.Cube087.geometry}
            material={materials['switch bottom.018']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube088'
            castShadow
            receiveShadow
            geometry={nodes.Cube088.geometry}
            material={materials['switch bottom.019']}
          />
          <animated.mesh
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
          <animated.mesh
            name='Cube024_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials['switch bottom']}
          />
          <animated.mesh
            name='Cube024_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials['switch']}
          />
        </group>
        {/* //SECTION - Keys */}
        <animated.mesh
          name='Backquote'
          ref={key.backquoteRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['keycaps2.001']}
          position={key.backquotePosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube' }}
        />
        <animated.mesh
          name='KeyA'
          ref={key.keyARef}
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['keycaps2.002']}
          position={key.keyAPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.001' }}
        />
        <animated.mesh
          name='KeyZ'
          ref={key.keyZRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['keycaps2.003']}
          position={key.keyZPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.002' }}
        />
        {/* Tab intentionally left nonfunctional (it grabs iframe on press causing it to not rebound correctly) */}
        <animated.mesh
          name='Tab'
          ref={key.tab}
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['keycaps.001']}
          position={key.tabPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.003' }}
        />
        <animated.mesh
          name='KeyQ'
          ref={key.keyQRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['keycaps2.004']}
          position={key.keyQPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.004' }}
        />
        <animated.mesh
          name='CapsLock'
          ref={key.capsLockRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['keycaps.002']}
          position={key.capsLockPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.005' }}
        />
        <animated.mesh
          name='ShiftLeft'
          ref={key.shiftLeftRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['keycaps.001']}
          position={key.shiftLeftPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.006' }}
        />
        <animated.mesh
          name='Space'
          ref={key.spaceRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['keycaps.004']}
          position={key.spacePosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.007' }}
        />
        <animated.mesh
          name='ControlLeft'
          ref={key.controlLeftRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['keycaps.005']}
          position={key.controlLeftPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.008' }}
        />
        {/* Meta (windows/apple/linux/super) intentionally left non functional */}
        <animated.mesh
          name='MetaLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['keycaps.006']}
          position={[-0.07954678, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.009' }}
        />
        <animated.mesh
          name='AltLeft'
          ref={key.altLeftRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['keycaps.007']}
          position={key.altLeftPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.010' }}
        />
        {/* The "Menu key" left non functional intentionally */}
        <animated.mesh
          name='Menu'
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['keycaps.008']}
          position={[0.0764515, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.011' }}
        />
        {/* Right win/super/mac ect key, intentionally left non functional */}
        <animated.mesh
          name='Super'
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['keycaps.009']}
          position={[0.05967194, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.012' }}
        />
        <animated.mesh
          name='AltRight'
          ref={key.altRightRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['keycaps.010']}
          position={key.altRightPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.013' }}
        />
        <animated.mesh
          name='ControlRight'
          ref={key.controlRightRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['keycaps.011']}
          position={key.controlRightPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.014' }}
        />
        <animated.mesh
          name='Backslash'
          ref={key.backslashRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['keycaps.012']}
          position={key.backslashPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.015' }}
        />
        <animated.mesh
          name='Backspace'
          ref={key.backspaceRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['keycaps.013']}
          position={key.backspacePosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.016' }}
        />
        <animated.mesh
          name='Enter'
          ref={key.enterRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['keycaps.014']}
          position={key.enterPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.017' }}
        />
        <animated.mesh
          name='ShiftRight'
          ref={key.shiftRightRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.keycaps}
          position={key.shiftRightPosition}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.018' }}
        />
        <animated.mesh
          name='Digit1'
          ref={key.digit1Ref}
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials['keycaps2.005']}
          position={key.digit1Position}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.039' }}
        />
        <animated.mesh
          name='Digit1'
          ref={key.digit2Ref}
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials['keycaps2.006']}
          position={key.digit2Position}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.040' }}
        />
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
        <animated.mesh
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
