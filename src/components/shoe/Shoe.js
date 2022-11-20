import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import useZoom from '../../hooks/useZoom';
import Header from '../description/header';
import Body from '../description/body';

const Shoe = (props) => {
  const [clicked, isClicked] = useState(false);

  const { handleZoom, handleUnzoom } = useZoom();
  const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb');
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => {
        if (clicked) {
          handleUnzoom();
          isClicked(!clicked);
        } else {
          handleZoom('SHOE');
          isClicked(!clicked);
        }
      }}
      onPointerMissed={() => {
        handleUnzoom();
        isClicked(false);
      }}>
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
      {clicked && (
        <>
          <Header
            position={[1.2, -1.15, 1.75]}
            rotation={[Math.PI / 2.5, -1.8, 0]}>
            Sole Inc.
          </Header>
          <Body position={[0.2, -2.5, 0.5]} rotation={[Math.PI / 2.5, -1.8, 0]}>
            Our team was tasked with creating a complete redesign of an
            outadated client-facing retail web-portal including but not limited
            to branding, and website functionality. This project comprises a
            complete redesign of the retail portal intended to address the
            client's concerns and modernize the site. This document outlines the
            design and features our team implemented.
          </Body>
        </>
      )}
    </group>
  );
};

useGLTF.preload('/nike_air_zoom_pegasus_36.glb');

export default Shoe;
