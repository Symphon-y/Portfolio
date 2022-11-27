import { Html, PresentationControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense } from 'react';
import useWindowDimensions from '../../hooks/useWindowDiminsions';

const MobileExperience = () => {
  const { width, height } = useWindowDimensions();

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
            }></Suspense>
        </AnimatePresence>
      </Canvas>
    </>
  );
};

export default MobileExperience;
