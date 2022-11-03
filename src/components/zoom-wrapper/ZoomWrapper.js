import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRoute, useLocation } from 'wouter';

const GOLDENRATIO = 1.61803398875;

export default function ZoomWrapper({
  children,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
  x,
  y,
  z,
  quaternionX,
  quaternionY,
  quaternionZ,
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute('/item/:id');
  const [, setLocation] = useLocation();
  const zoomSettingX = x || 0;
  const zoomSettingY = y || GOLDENRATIO / 2;
  const zoomSettingZ = z || 1.25;
  const pX = quaternionX || 0;
  const pY = quaternionY || 0;
  const pZ = quaternionZ || 5.5;
  useEffect(
    (e) => {
      clicked.current = ref.current.getObjectByName(params?.id);
      if (clicked.current) {
        clicked.current.parent.updateWorldMatrix(true, true);
        // clicked.current.parent.localToWorld(p.set(0, 7, 5));
        clicked.current.parent.localToWorld(
          p.set(zoomSettingX, zoomSettingY, zoomSettingZ)
        );
        clicked.current.parent.getWorldQuaternion(q);
      } else {
        p.set(pX, pY, pZ);
        q.identity();
      }
    },
    [p, params?.id, q]
  );
  useFrame((state) => {
    state.camera.position.lerp(p, 0.025);
    state.camera.quaternion.slerp(q, 0.025);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clicked.current === e.object ? '/' : '/item/' + e.object.name
        );
      }}
      onPointerMissed={() => setLocation('/')}>
      {children}
    </group>
  );
}
