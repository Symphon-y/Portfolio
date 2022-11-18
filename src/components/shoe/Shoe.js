import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';
import Header from '../description/header';
import Body from '../description/body';

const Shoe = (props) => {
  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb');
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => handleZoom('SHOE')}
      onPointerMissed={() => handleUnzoom()}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.NikeShoe}
          />
        </group>
      </group>
      <Header>TEST</Header>
      <Body>
        An online language exchange platform consisting of a forum, chat
        feature, and event scheduler. ● Lead a team of eight engineers.
        Organized and officiated daily stand-ups, maintained trello ticketing
        system, and ensured the execution of a unified project vision. ●
        Organized front end codebase with React while maintaining a structured
        separation of concerns between components. ● Created dynamic header with
        content filtering feature in React to facilitate the users ability to
        search forum cards. ● Constructed sidebar with React consisting of drop
        down menus and dynamic links to provide website navigation. ● Designed
        wireframe and mockup in figma in order to facilitate the implementation
        of front end styling conventions
      </Body>
    </group>
  );
};

useGLTF.preload('/nike_air_zoom_pegasus_36.glb');

export default Shoe;
