import { useBounds } from '@react-three/drei';

const ClickToZoom = ({ children }) => {
  const bounds = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => {
        console.log(e);
        return e.button === 0 && bounds.refresh().fit();
      }}>
      {children}
    </group>
  );
};

export default ClickToZoom;
