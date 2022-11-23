import React, { useState } from 'react';
import { Billboard, Text } from '@react-three/drei';

const Body = ({ children, ...props }) => {
  const [opts, setOpts] = useState({
    font: './bangers-v20-latin/bangers-v20-latin-regular.ttf',
    fontSize: 0.2,
    color: '#99ccff',
    maxWidth: 3,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'justify',
    materialType: 'MeshPhongMaterial',
  });

  return (
    <>
      <Billboard
        follow={true}
        lockX={false}
        lockY={true}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text {...props} {...opts}>
          {children}
        </Text>
      </Billboard>
    </>
  );
};

export default Body;
