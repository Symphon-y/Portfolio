import {
  Text,
  Float,
  Environment,
  PresentationControls,
  RandomizedLight,
  Html,
  Stars,
} from '@react-three/drei';
import Laptop from '../laptop/Laptop';
import Coffee from '../coffee/Coffee';
import Keyboard from '../keyboard/KeyboardTwo';
import { Canvas } from '@react-three/fiber';
import { KeyboardContextProvider } from '../../context/KeyboardContextProvider';
import { Suspense, useContext, useState } from 'react';
import Iphone from '../iphone/Iphone';
import Shoe from '../shoe/Shoe';
import Supernova from '../project-supernova/supernova';
import Astronaught from '../astronaught/Astronaught';
import useWindowDimensions from '../../hooks/useWindowDiminsions';
import PopUpModal from './portfolioModal/PopUpModal';
import { ZoomContext } from '../../context/ZoomContext';
import { AnimatePresence, motion } from 'framer-motion';
import {
  EffectComposer,
  Outline,
  SelectiveBloom,
} from '@react-three/postprocessing';

const Experience = () => {
  // Hover State For Outline Effect
  const [hovered, onHover] = useState(null);
  const selected = hovered ? [hovered] : undefined;

  const { activeObject, setActiveObject, modal, setModal } =
    useContext(ZoomContext);
  const { width, height } = useWindowDimensions();
  let hoverGlow;
  var w = window.innerWidth;
  var h = window.innerHeight;

  console.log('width', w);
  console.log('height', h);
  switch (activeObject) {
    case 'PLANET':
      hoverGlow = '#EF3B46';
      break;
    case 'SHOE':
      hoverGlow = '#80dbd8';
      break;
    default:
      hoverGlow = '#48ABFE';
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <>
      <Canvas>
        <AnimatePresence>
          <Suspense
            fallback={
              <Html center>
                <motion.div
                  variants={container}
                  initial='hidden'
                  animate='show'
                  exit={{ opacity: 0 }}>
                  <div
                    className='fallback-container'
                    style={{ width: width, height: height }}>
                    <div class='sk-folding-cube'>
                      <div class='sk-cube1 sk-cube'></div>
                      <div class='sk-cube2 sk-cube'></div>
                      <div class='sk-cube4 sk-cube'></div>
                      <div class='sk-cube3 sk-cube'></div>
                    </div>
                  </div>
                </motion.div>
              </Html>
            }>
            {/* TODO: CREATE A FULL SCREEN IMAGE THAT FADES IN ON MOUNT WITH AN ENTER
            BUTTON WHICH ON CLICK FADES AND REMOVES THE FULL SCREEN ELEMENT FROM THE DOM  */}
            {/* Adds Fake Stars to Background */}
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            {/* <Particles count={10000} mouse={mouse} /> */}
            {/* Sets the Background Color of the scene */}
            <color args={['#000000']} attach='background' />
            <RandomizedLight
              amount={8}
              radius={5}
              ambient={0.5}
              position={[5, 3, 2]}
              bias={0.001}
            />
            {/* Sets the default Lighting settings for the scene */}
            {/* <Skybox /> */}
            <Environment preset='city' />
            {/* <Bounds fit={false} observe={false} damping={4} margin={1}> */}
            {/* {popUpModal()} */}
            <EffectComposer autoClear={false}>
              {/* Creates an Outline on the selected object */}
              <Outline
                selection={selected}
                visibleEdgeColor={hoverGlow}
                edgeStrength={5}
                blur={true}
                pulseSpeed={0.25}
              />
              {/* Creates a Glow on the selected object */}
              <SelectiveBloom
                selection={selected}
                intensity={0.75}
                luminanceThreshold={0.18}
                luminanceSmoothing={0.15}
              />
            </EffectComposer>
            <PopUpModal modal={modal} setModal={setModal} />
            {/* Sets the camera controls,
              global allows grabbing from anywhere in the scene
              rotation sets the default rotation parameters
              polar sets a rotation limit for the Y axis
              azimuth sets the rotation limit for the X axis
              config alters the internal Spring library animation settings #jiggle-physics
              snap returns the object to its initial position */}
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
                  <Coffee
                    modal={modal}
                    hovered={hovered}
                    onHover={onHover}
                    setModal={setModal}
                  />
                </mesh>
                {/* Adds Keyboard Mesh */}
                <mesh
                  position={[-2, -1.55, 0.2]}
                  scale={15}
                  rotation-y={Math.PI * -0.25}>
                  <KeyboardContextProvider>
                    <Keyboard hovered={hovered} onHover={onHover} />
                  </KeyboardContextProvider>
                </mesh>

                <pointLight
                  position={[2, -3, 2]}
                  distance={10}
                  intensity={10}
                  color='blue'
                />
                <pointLight
                  position={[-1, 1, 2]}
                  distance={10}
                  intensity={2}
                  color='red'
                />

                <mesh
                  position={[-4, -0.5, 0]}
                  scale={0.25}
                  rotation-y={Math.PI * 0.3}
                  rotation-x={Math.PI * -0.25}
                  rotation-z={Math.PI * 0.15}>
                  <Iphone
                    activeObject={activeObject}
                    setActiveObject={setActiveObject}
                    modal={modal}
                    setModal={setModal}
                    hovered={hovered}
                    onHover={onHover}
                  />
                </mesh>
                <mesh
                  position={[-4.2, -0.75, -5]}
                  scale={0.45}
                  rotation-y={Math.PI * 0.75}
                  rotation-x={Math.PI * -0.25}
                  rotation-z={Math.PI * 0.15}>
                  <Shoe
                    activeObject={activeObject}
                    setActiveObject={setActiveObject}
                    modal={modal}
                    setModal={setModal}
                    hovered={hovered}
                    onHover={onHover}
                  />
                </mesh>
                <mesh
                  position={[-11.26, 1.0, -25]}
                  scale={0.1}
                  rotation-y={Math.PI * 0.75}
                  rotation-x={Math.PI * -0.25}
                  rotation-z={Math.PI * 0.15}>
                  <Supernova
                    activeObject={activeObject}
                    setActiveObject={setActiveObject}
                    modal={modal}
                    setModal={setModal}
                    hovered={hovered}
                    onHover={onHover}
                  />
                </mesh>
                <mesh
                  position={[19.5, 5.5, -5]}
                  scale={1}
                  rotation-y={Math.PI * -0.33}
                  rotation-x={Math.PI * 0.28}
                  rotation-z={Math.PI * 0.4}>
                  <Astronaught
                    activeObject={activeObject}
                    setActiveObject={setActiveObject}
                    modal={modal}
                    setModal={setModal}
                    hovered={hovered}
                    onHover={onHover}
                  />
                </mesh>
              </Float>
            </PresentationControls>
            {/* Adds default shadows to the scene */}
          </Suspense>
        </AnimatePresence>
      </Canvas>
    </>
  );
};

export default Experience;
