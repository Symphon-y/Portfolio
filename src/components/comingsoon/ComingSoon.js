import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  RandomizedLight,
  Stars,
  Text,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, Fragment, Suspense, useContext, useState } from 'react';
import { ZoomContext } from '../../context/ZoomContext';
import useWindowDimensions from '../../hooks/useWindowDiminsions';
import Astronaught from '../astronaught/Astronaught';

const camContext = createContext();
function OrbitControlContext({ children }) {
  const { gl, camera } = useThree();
  const api = useState(true);
  return (
    <Fragment>
      <OrbitControls
        args={[camera, gl.domElement]}
        enableDamping
        enabled={api[0]}
      />
      <camContext.Provider value={api}>{children}</camContext.Provider>
    </Fragment>
  );
}

const ComingSoon = () => {
  const [hovered, onHover] = useState(null);
  const { width, height } = useWindowDimensions();
  const { activeObject, setActiveObject, modal, setModal } =
    useContext(ZoomContext);

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
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        pixelRatio={window.devicePixelRatio}>
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
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            <color args={['#000000']} attach='background' />
            <Environment preset='city' />
            {/* <Particles count={10000} mouse={mouse} /> */}
            <OrbitControlContext>
              {/* Sets the Background Color of the scene */}
              {/* <color args={['white']} attach='background' /> */}
              <RandomizedLight
                amount={8}
                radius={5}
                ambient={0.5}
                position={[5, 3, 2]}
                bias={0.001}
              />
              <Text
                font='./FiraCode-Light.ttf'
                color={'white'}
                position={[0, 1, 1.75]}
                maxWidth={9}
                textAlign='center'
                castShadow>
                > Mobile Experience Coming Soon
              </Text>
              <Float rotationIntensity={0.17}>
                <mesh
                  position={[0, -4, -1]}
                  scale={1}
                  rotation-y={Math.PI}
                  rotation-x={Math.PI}
                  rotation-z={Math.PI}>
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
            </OrbitControlContext>
            <ContactShadows position-y={0} opacity={0.5} scale={3} blur={2.4} />{' '}
          </Suspense>
        </AnimatePresence>
      </Canvas>
    </>
  );
};

export default ComingSoon;
