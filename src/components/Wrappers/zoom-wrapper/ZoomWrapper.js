import { useFrame, useThree } from '@react-three/fiber';
import * as TWEEN from '@tweenjs/tween.js';
import { POSITIONS, ROTATIONS } from '../../../types/constants';

export default function ZoomWrapper({
  children,
  targetPosition,
  targetRotation,
}) {
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    TWEEN.update();
  });

  const handleFocus = () => {
    new TWEEN.Tween(camera.position)
      .to(
        {
          x: targetPosition[0],
          y: targetPosition[1],
          z: targetPosition[2],
        },
        1000
      )
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start();
    if (targetRotation) {
      new TWEEN.Tween(camera.rotation)
        .to(
          {
            x: targetRotation[0],
            y: targetRotation[1],
            z: targetRotation[2],
          },
          1000
        )
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
    }
  };

  const handleUnfocus = () => {
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
  };

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        handleFocus();
      }}
      onPointerMissed={handleUnfocus}>
      {children}
    </group>
  );
}

// import * as THREE from 'three';
// import { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { useRoute, useLocation } from 'wouter';

// const GOLDENRATIO = 1.61803398875;

// export default function ZoomWrapper({
//   children,
//   q = new THREE.Quaternion(),
//   p = new THREE.Vector3(),
//   x,
//   y,
//   z,
//   quaternionX,
//   quaternionY,
//   quaternionZ,
// }) {
//   const ref = useRef();
//   const clicked = useRef();
//   const [, params] = useRoute('/item/:id');
//   const [, setLocation] = useLocation();
//   const zoomSettingX = x || 0;
//   const zoomSettingY = y || GOLDENRATIO / 2;
//   const zoomSettingZ = z || 1.25;
//   const pX = quaternionX || 0;
//   const pY = quaternionY || 0;
//   const pZ = quaternionZ || 5.5;
//   useEffect(
//     (e) => {
//       clicked.current = ref.current.getObjectByName(params?.id);
//       if (clicked.current) {
//         clicked.current.parent.updateWorldMatrix(true, true);
//         // clicked.current.parent.localToWorld(p.set(0, 7, 5));
//         clicked.current.parent.localToWorld(
//           p.set(zoomSettingX, zoomSettingY, zoomSettingZ)
//         );
//         clicked.current.parent.getWorldQuaternion(q);
//       } else {
//         p.set(pX, pY, pZ);
//         q.identity();
//       }
//     },
//     [p, params?.id, q]
//   );
//   useFrame((state) => {
//     state.camera.position.lerp(p, 0.025);
//     state.camera.quaternion.slerp(q, 0.025);
//   });

//   return (
//     <group
//       ref={ref}
//       onClick={(e) => {
//         e.stopPropagation();
//         setLocation(
//           clicked.current === e.object ? '/' : '/item/' + e.object.name
//         );
//       }}
//       onPointerMissed={(e) => {
//         setLocation('/');
//       }}>
//       {children}
//     </group>
//   );
// }
