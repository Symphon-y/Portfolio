import { Billboard, Text } from '@react-three/drei';

const Header = ({ children, ...props }) => {
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
          {...props}
          fontSize={0.4}
          maxWidth={7}
          textAlign='left'>
          {children}
        </Text>
      </Billboard>
    </>
  );
};

export default Header;
