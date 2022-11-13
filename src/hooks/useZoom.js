import { useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { POSITIONS, ROTATIONS } from '../types/constants';
import * as TWEEN from '@tweenjs/tween.js';

const useZoom = () => {
  const [activeObject, setActiveObject] = useState('DEFAULT_CAMERA');
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    TWEEN.update();
  });

  const handleZoom = useCallback(
    (obj) => {
      if (obj === activeObject) return;
      setActiveObject(obj);
      const x = (POSITIONS[obj] || [])[0];
      const y = (POSITIONS[obj] || [])[1];
      const z = (POSITIONS[obj] || [])[2];
      new TWEEN.Tween(camera.position)
        .to({ x, y, z }, 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      const rotationX = (ROTATIONS[obj] || [])[0];
      const rotationY = (ROTATIONS[obj] || [])[1];
      const rotationZ = (ROTATIONS[obj] || [])[2];
      new TWEEN.Tween(camera.rotation)
        .to(
          {
            x: rotationX,
            y: rotationY,
            z: rotationZ,
          },
          1000
        )
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
    },
    [activeObject, camera.position, camera.rotation]
  );

  const handleUnzoom = useCallback(() => {
    setActiveObject('DEFAULT_CAMERA');
    new TWEEN.Tween(camera.position)
      .to(
        {
          x: POSITIONS.DEFAULT_CAMERA[0],
          y: POSITIONS.DEFAULT_CAMERA[1],
          z: POSITIONS.DEFAULT_CAMERA[2],
        },
        1000
      )
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start();
    new TWEEN.Tween(camera.rotation)
      .to(
        {
          x: ROTATIONS.DEFAULT_CAMERA[0],
          y: ROTATIONS.DEFAULT_CAMERA[1],
          z: ROTATIONS.DEFAULT_CAMERA[2],
        },
        1000
      )
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start();
  }, [camera.position, camera.rotation]);

  return {
    activeObject,
    handleZoom,
    handleUnzoom,
  };
};

export default useZoom;
