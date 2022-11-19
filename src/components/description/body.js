import { Billboard, Text } from '@react-three/drei';

const Body = ({ children, ...props }) => {
  return (
    <>
      <Billboard
        follow={true}
        lockX={false}
        lockY={true}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text
          font='./bangers-v20-latin/bangers-v20-latin-regular.ttf'
          position={[6, 3, 2]}
          {...props}
          fontSize={0.2}
          maxWidth={5}
          textAlign='left'>
          {children}
        </Text>
      </Billboard>
    </>
  );
};

export default Body;
