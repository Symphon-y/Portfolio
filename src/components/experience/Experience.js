import {
  Text,
  Float,
  Environment,
  PresentationControls,
  ContactShadows,
} from '@react-three/drei';
import Laptop from '../laptop/Laptop';
import Coffee from '../coffee/Coffee';
import Keyboard from '../keyboard/KeyboardTwo';
import { Canvas } from '@react-three/fiber';
import { KeyboardContextProvider } from '../../context/KeyboardContextProvider';
import Particles from '../particles/Particles';
import { useRef } from 'react';
import Iphone from '../iphone/Iphone';
import Shoe from '../shoe/Shoe';
import Supernova from '../project-supernova/supernova';

const Experience = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const mouse = useRef([0, 0]);

  return (
    <>
      <Canvas>
        <Particles count={isMobile ? 5000 : 10000} mouse={mouse} />

        {/* Sets the Background Color of the scene */}
        <color args={['#151515']} attach='background' />
        {/* Sets the default Lighting settings for the scene */}
        {/* <Skybox /> */}
        <Environment preset='city' />

        {/* Sets the camera controls,
        global allows grabbing from anywhere in the scene
        rotation sets the default rotation parameters
        polar sets a rotation limit for the Y axis
        azimuth sets the rotation limit for the X axis
        config alters the internal Spring library animation settings #jiggle-physics
        snap returns the object to its initial position */}
        {/* <Bounds fit={false} observe={false} damping={4} margin={1}> */}
        <PresentationControls
          global
          rotation={[0.13, 0.5, 0]}
          polar={[-0.25, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
          makeDefault>
          {/* Adds a float animation */}
          <Float rotationIntensity={0.17}>
            {/* Adds screen light */}
            <rectAreaLight
              width={2.5}
              height={4.65}
              intensity={65}
              color={'#57cbff'}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 1.75, -1.15]}
            />
            {/* <ClickToZoom> */}
            <mesh position-y={-1.2} scale={1.25}>
              <Laptop />
            </mesh>
            {/* Adds text to the scene */}
            <Text
              font='./bangers-v20-latin/bangers-v20-latin-regular.ttf'
              fontSize={1}
              position={[2, 0.75, 0.75]}
              rotation-y={-1.25}
              maxWidth={2}
              textAlign='center'>
              TRAVIS REDDEN
            </Text>
            {/* Adds Coffee Cup Mesh */}
            <mesh
              position={[-0.2, -0.7, 3]}
              scale={-0.4}
              rotation-x={Math.PI * 0.85}
              rotation-y={Math.PI * 0.25}>
              <Coffee />
            </mesh>
            {/* Adds Keyboard Mesh */}
            {/* <mesh
              position={[-1.25, -2, -0.75]}
              scale={1}
              rotation-y={Math.PI * -0.25}>
              <Keyboard />
            </mesh> */}
            <mesh
              position={[-2, -1.55, 0.2]}
              scale={15}
              rotation-y={Math.PI * -0.25}>
              <KeyboardContextProvider>
                <Keyboard />
              </KeyboardContextProvider>
            </mesh>
            {/* </ClickToZoom> */}

            {/* <Float rotationIntensity={0.25}>
            <mesh
              position={[35, 10, -15]}
              scale={1.25}
              // rotation-y={Math.PI * -0.25}
              rotation-y={Math.PI * -0.25}
              rotation-z={Math.PI * 0.25}>
              <Astronaught />

            </mesh>
          </Float> */}
            <pointLight
              position={[2, -3, 2]}
              distance={100}
              intensity={3}
              color='blue'
            />
            <pointLight
              position={[-1, 1, 2]}
              distance={100}
              intensity={2}
              color='red'
            />

            <mesh
              position={[-4, -0.5, 0]}
              scale={0.25}
              rotation-y={Math.PI * 0.3}
              rotation-x={Math.PI * -0.25}
              rotation-z={Math.PI * 0.15}>
              <Iphone />
            </mesh>
            <mesh
              position={[-4.2, -0.75, -5]}
              scale={0.45}
              rotation-y={Math.PI * 0.75}
              rotation-x={Math.PI * -0.25}
              rotation-z={Math.PI * 0.15}>
              <Shoe />
            </mesh>
            <mesh
              position={[-11.26, 1.0, -25]}
              scale={0.1}
              rotation-y={Math.PI * 0.75}
              rotation-x={Math.PI * -0.25}
              rotation-z={Math.PI * 0.15}>
              <Supernova />
            </mesh>
          </Float>
        </PresentationControls>
        {/* </Bounds> */}
        {/* Adds default shadows to the scene */}

        <ContactShadows position-y={-1.4} opacity={0.4} scale={7} blur={2.4} />
      </Canvas>
    </>
  );
};

export default Experience;
