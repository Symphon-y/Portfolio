import React, { useRef } from 'react';
import { Html, useGLTF, useBounds } from '@react-three/drei';
import ZoomWrapper from '../Wrappers/zoom-wrapper/ZoomWrapper';
import Iframe from '../iframe/Iframe';
import { POSITIONS, ROTATIONS } from '../../types/constants';
import useZoom from '../../hooks/useZoom';

const Laptop = (props) => {
  const { handleZoom, handleUnzoom } = useZoom();
  const bounds = useBounds();

  // const [contentRef, setContentRef] = useState(null);
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );
  // const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <>
      <group
        onClick={() => {
          handleZoom('SCREEN');
        }}
        onPointerMissed={handleUnzoom}
        position={[0, 0.52, 0]}
        scale={[0.1, 0.1, 0.1]}>
        <mesh
          name='monitor'
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
        />
        <mesh
          name='monitor'
          geometry={nodes.Circle001_1.geometry}
          material={nodes.Circle001_1.material}
        />
        <mesh
          name='monitor'
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          name='monitor'
          geometry={nodes.Circle001_3.geometry}
          material={nodes.Circle001_3.material}
        />
        <mesh
          name='monitor'
          geometry={nodes.Circle001_4.geometry}
          material={nodes.Circle001_4.material}
        />
        <mesh
          name='monitor'
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          name='monitor'
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <mesh
          name='monitor'
          geometry={nodes.FrontCameraRing001.geometry}
          material={materials['CameraRIngBlack.002']}
          position={[-0.15, 19.57, -16.15]}
          scale={5.8}
        />
        <mesh
          name='monitor'
          geometry={nodes.KeyboardKeyHole.geometry}
          material={nodes.KeyboardKeyHole.material}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <mesh
          name='monitor'
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.95, -0.75, 7.86]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          <mesh
            name='monitor'
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[0, -0.51, 0]} scale={5.8}>
          <mesh
            name='monitor'
            geometry={nodes.Circle006.geometry}
            material={nodes.Circle006.material}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle006_1.geometry}
            material={nodes.Circle006_1.material}
          />
        </group>
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          <mesh
            name='monitor'
            geometry={nodes.Circle.geometry}
            material={nodes.Circle.material}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle_1.geometry}
            material={materials.Key}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <group
          name='monitor'
          position={[0.01, -0.47, -10.41]}
          rotation={[1.31, 0, 0]}
          scale={5.8}>
          <mesh
            name='monitor'
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
          />
          <mesh
            onClick={() => {
              handleZoom('SCREEN');
            }}
            name='monitor'
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            onClick={() => {
              handleZoom('SCREEN');
            }}
            name='monitor'
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            name='monitor'
            geometry={nodes.AppleLogo000.geometry}
            material={materials['AppleLogo.004']}
            position={[0, -0.11, -1.8]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.58, 0.58, 0.58]}
          />
        </group>
        <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
          <mesh
            name='monitor'
            geometry={nodes.Circle009.geometry}
            material={nodes.Circle009.material}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle009_1.geometry}
            material={nodes.Circle009_1.material}
          />
        </group>
        <group position={[12.2, 0.03, 0.6]} scale={5.8}>
          <mesh
            name='monitor'
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
          />
          <mesh
            name='monitor'
            geometry={nodes.Circle003_1.geometry}
            material={nodes.Circle003_1.material}
          />
        </group>
      </group>
      {/* Adds an iframe to the scene
      wrapperClass adds a css class to the iframe */}

      <Html
        onClick={() => {
          handleZoom('SCREEN');
        }}
        transform
        distanceFactor={0.99}
        position={[0, 1.5, -1.4]}
        rotation-x={-0.256}>
        {/* <iframe title='iframe' src='http://www.TravisRedden.com:3006' /> */}
        <Iframe handleZoom={handleZoom} handleUnzoom={handleUnzoom} />
      </Html>
    </>
  );
};

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
);

export default Laptop;
