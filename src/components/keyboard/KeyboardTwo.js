import React, { useRef, useEffect, useContext, useState } from 'react';
import { Text, useGLTF, useAnimations } from '@react-three/drei';
import { animated } from '@react-spring/three';
import { KeyboardContext } from '../../context/KeyboardContext';
import ZoomWrapper from '../Wrappers/zoom-wrapper/ZoomWrapper';
import { POSITIONS, ROTATIONS } from '../../types/constants';

const Keyboard = (props) => {
  const [text, setText] = useState('');

  const key = useContext(KeyboardContext);

  //SECTION - Refs
  const group = useRef();

  const { nodes, materials, animations } = useGLTF('/keyboard.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keycode = e.code;
      const actualKey = e.key;
      if (keycode === 'Backspace') {
        const newText = text.slice(0, -1);
        setText(newText);
      } else if (
        actualKey === 'Enter' ||
        actualKey === 'Shift' ||
        actualKey === 'Meta' ||
        actualKey === 'Alt' ||
        actualKey === 'Tab' ||
        actualKey === 'CapsLock' ||
        actualKey === 'Control'
      ) {
      } else {
        const nextLetter = text + actualKey;
        setText(nextLetter);
      }
      if (key[`set${keycode}`]) {
        key[`set${keycode}`](true);
      }
    };

    const handleKeyUp = (e) => {
      const keycode = e.code;
      if (key[`set${keycode}`]) {
        key[`set${keycode}`](false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [key, text]);

  return (
    //FIXME - ZoomWrapper useFrame causing unintended camera movement on keycode
    <>
      <ZoomWrapper
        targetPosition={POSITIONS.KEYBOARD}
        targetRotation={ROTATIONS.KEYBOARD}>
        <group ref={group} {...props} dispose={null}>
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
              name='Digit2'
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
              name='Digit3'
              ref={key.digit3Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube041.geometry}
              material={materials['keycaps2.007']}
              position={key.digit3Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.041' }}
            />
            <animated.mesh
              name='Digit4'
              ref={key.digit4Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube042.geometry}
              material={materials['keycaps2.008']}
              position={key.digit4Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.042' }}
            />
            <animated.mesh
              name='Digit5'
              ref={key.digit5Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube043.geometry}
              material={materials['keycaps2.009']}
              position={key.digit5Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.043' }}
            />
            <animated.mesh
              name='Digit6'
              ref={key.digit6Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube044.geometry}
              material={materials['keycaps2.010']}
              position={key.digit6Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.044' }}
            />
            <animated.mesh
              name='Digit7'
              ref={key.digit7Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube045.geometry}
              material={materials['keycaps2.011']}
              position={key.digit7Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.045' }}
            />
            <animated.mesh
              name='Digit8'
              ref={key.digit8Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube046.geometry}
              material={materials['keycaps2.012']}
              position={key.digit8Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.046' }}
            />
            <animated.mesh
              name='Digit9'
              ref={key.digit9Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube047.geometry}
              material={materials['keycaps2.013']}
              position={key.digit9Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.047' }}
            />
            <animated.mesh
              name='Digit0'
              ref={key.digit0Ref}
              castShadow
              receiveShadow
              geometry={nodes.Cube048.geometry}
              material={materials['keycaps2.014']}
              position={key.digit0Position}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.048' }}
            />
            <animated.mesh
              name='Minus'
              ref={key.minusRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube049.geometry}
              material={materials['keycaps2.015']}
              position={key.minusPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.049' }}
            />
            <animated.mesh
              name='Equal'
              ref={key.equalRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube050.geometry}
              material={materials['keycaps2.016']}
              position={key.equalPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.050' }}
            />
            <animated.mesh
              name='KeyS'
              ref={key.keySRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube051.geometry}
              material={materials['keycaps2.017']}
              position={key.keySPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.051' }}
            />
            <animated.mesh
              name='KeyD'
              ref={key.keyDRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube052.geometry}
              material={materials['keycaps2.018']}
              position={key.keyDPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.052' }}
            />
            <animated.mesh
              name='KeyF'
              ref={key.keyFRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube053.geometry}
              material={materials['keycaps2.019']}
              position={key.keyFPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.053' }}
            />
            <animated.mesh
              name='KeyG'
              ref={key.keyGRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube054.geometry}
              material={materials['keycaps2.020']}
              position={key.keyGPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.054' }}
            />
            <animated.mesh
              name='KeyH'
              ref={key.keyHRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube055.geometry}
              material={materials['keycaps2.021']}
              position={key.keyHPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.055' }}
            />
            <animated.mesh
              name='KeyJ'
              ref={key.keyJRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube056.geometry}
              material={materials['keycaps2.022']}
              position={key.keyJPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.056' }}
            />
            <animated.mesh
              name='KeyK'
              ref={key.keyKRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube057.geometry}
              material={materials['keycaps2.023']}
              position={key.keyKPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.057' }}
            />
            <animated.mesh
              name='KeyL'
              ref={key.keyLRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube058.geometry}
              material={materials['keycaps2.024']}
              position={key.keyLPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.058' }}
            />
            <animated.mesh
              name='Semicolon'
              ref={key.semicolonRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube059.geometry}
              material={materials['keycaps2.025']}
              position={key.semicolonPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.059' }}
            />
            <animated.mesh
              name='Quote'
              ref={key.quoteRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube060.geometry}
              material={materials['keycaps2.026']}
              position={key.quotePosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.060' }}
            />
            <animated.mesh
              name='KeyX'
              ref={key.keyXRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube061.geometry}
              material={materials['keycaps2.027']}
              position={key.keyXPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.061' }}
            />
            <animated.mesh
              name='KeyC'
              ref={key.keyCRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube062.geometry}
              material={materials['keycaps2.028']}
              position={key.keyCPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.062' }}
            />
            <animated.mesh
              name='KeyV'
              ref={key.keyVRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube063.geometry}
              material={materials['keycaps2.029']}
              position={key.keyVPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.063' }}
            />
            <animated.mesh
              name='KeyB'
              ref={key.keyBRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube064.geometry}
              material={materials['keycaps2.030']}
              position={key.keyBPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.064' }}
            />
            <animated.mesh
              name='KeyN'
              ref={key.keyNRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube065.geometry}
              material={materials['keycaps2.031']}
              position={key.keyNPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.065' }}
            />
            <animated.mesh
              name='KeyM'
              ref={key.keyMRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube066.geometry}
              material={materials['keycaps2.032']}
              position={key.keyMPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.066' }}
            />
            <animated.mesh
              name='Comma'
              ref={key.commaRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube067.geometry}
              material={materials['keycaps2.033']}
              position={key.commaPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.067' }}
            />
            <animated.mesh
              name='Period'
              ref={key.periodRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube068.geometry}
              material={materials['keycaps2.034']}
              position={key.periodPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.068' }}
            />
            <animated.mesh
              name='Slash'
              ref={key.slashRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube069.geometry}
              material={materials['keycaps2.035']}
              position={key.slashPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.069' }}
            />
            <animated.mesh
              name='KeyW'
              ref={key.keyWRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube070.geometry}
              material={materials['keycaps2.036']}
              position={key.keyWPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.070' }}
            />
            <animated.mesh
              name='KeyE'
              ref={key.keyERef}
              castShadow
              receiveShadow
              geometry={nodes.Cube071.geometry}
              material={materials['keycaps2.037']}
              position={key.keyEPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.071' }}
            />
            <animated.mesh
              name='KeyR'
              ref={key.keyRRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube072.geometry}
              material={materials['keycaps2.038']}
              position={key.keyRPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.072' }}
            />
            <animated.mesh
              name='KeyT'
              ref={key.keyTRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube073.geometry}
              material={materials['keycaps2.039']}
              position={key.keyTPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.073' }}
            />
            <animated.mesh
              name='KeyY'
              ref={key.keyYRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube074.geometry}
              material={materials['keycaps2.040']}
              position={key.keyYPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.074' }}
            />
            <animated.mesh
              name='KeyU'
              ref={key.keyURef}
              castShadow
              receiveShadow
              geometry={nodes.Cube075.geometry}
              material={materials['keycaps2.041']}
              position={key.keyUPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.075' }}
            />
            <animated.mesh
              name='KeyI'
              ref={key.keyIRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube076.geometry}
              material={materials['keycaps2.042']}
              position={key.keyIPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.076' }}
            />
            <animated.mesh
              name='KeyO'
              ref={key.keyORef}
              castShadow
              receiveShadow
              geometry={nodes.Cube077.geometry}
              material={materials['keycaps2.043']}
              position={key.keyOPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.077' }}
            />
            <animated.mesh
              name='KeyP'
              ref={key.keyPRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube078.geometry}
              material={materials['keycaps2.044']}
              position={key.keyPPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.078' }}
            />
            <animated.mesh
              name='BracketLeft'
              ref={key.bracketLeftRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube079.geometry}
              material={materials['keycaps2.045']}
              position={key.bracketLeftPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.079' }}
            />
            <animated.mesh
              name='BracketRight'
              ref={key.bracketRightRef}
              castShadow
              receiveShadow
              geometry={nodes.Cube080.geometry}
              material={materials.keycaps2}
              position={key.bracketRightPosition}
              rotation={[0.05235988, 0, 0]}
              scale={0.5}
              userData={{ name: 'Cube.080' }}
            />
          </group>
        </group>
      </ZoomWrapper>
      <Text
        font='./bangers-v20-latin/bangers-v20-latin-regular.ttf'
        fontSize={0.02}
        textAlign='left'
        maxWidth={50}
        overflowWrap={true}
        position={[0.16, 0, 0]}
        rotation-y={0}
        rotation-x={-1.5}
        rotation-z={0}
        anchorX='left'
        anchorY={'top-baseline'}
        outlineWidth='5%'>
        {`${text}`}
      </Text>
    </>
  );
};

useGLTF.preload('/keyboard.glb');

export default Keyboard;
