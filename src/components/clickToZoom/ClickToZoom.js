import { useState, useEffect } from 'react';
import { useBounds } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
const ClickToZoom = ({ children }) => {
  const bounds = useBounds();
  const [camera, setCamera] = useState();
  const state = useThree();

  useEffect(() => {
    setCamera(state.camera);
  });

  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => {
        console.log(e);
        return e.button === 0 && bounds.refresh(camera).fit();
      }}>
      {children}
    </group>
  );
};

export default ClickToZoom;
