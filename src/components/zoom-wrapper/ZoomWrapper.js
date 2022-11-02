import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRoute, useLocation } from 'wouter';

const GOLDENRATIO = 1.61803398875;

export default function ZoomWrapper({
  children,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute('/item/:id');
  const [, setLocation] = useLocation();
  useEffect(
    (e) => {
      clicked.current = ref.current.getObjectByName(params?.id);
      if (clicked.current) {
        clicked.current.parent.updateWorldMatrix(true, true);
        clicked.current.parent.localToWorld(p.set(0, 7, 5));
        clicked.current.parent.getWorldQuaternion(q);
      } else {
        p.set(0, 0, 5.5);
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
