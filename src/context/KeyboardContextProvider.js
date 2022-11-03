import { useState, useRef } from 'react';
import { KeyboardContext } from './KeyboardContext';
import { useSpring, config } from '@react-spring/three';

export const KeyboardContextProvider = ({ children }) => {
  //SECTION - Key State
  const [backquote, setBackquote] = useState(false);
  const [digit1, setDigit1] = useState(false);
  const [keyA, setKeyA] = useState(false);

  //SECTION - Key Refs
  const backquoteRef = useRef();
  const digit1Ref = useRef();
  const keyARef = useRef();

  //SECTION - Key Positions
  const { backquotePosition } = useSpring({
    backquotePosition: backquote
      ? [-0.09729859, -0.00220405, -0.02940938]
      : [-0.09729859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { keyAPosition } = useSpring({
    keyAPosition: keyA
      ? [-0.07229859, -0.00366014, 0.00005019]
      : [-0.07229859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });

  //SECTION - Context
  const value = {
    //NOTE - State
    Backquote: backquote,
    //NOTE - Ref
    backquoteRef: backquoteRef,
    //NOTE - Position
    backquotePosition: backquotePosition,
    //NOTE - Set State
    setBackquote: setBackquote,

    Digit1: digit1,
    digit1Ref: digit1Ref,
    // digit1: digit1Position,
    setDigit1: setDigit1,

    KeyA: keyA,
    keyARef: keyARef,
    keyAPosition: keyAPosition,
    setKeyA: setKeyA,
  };
  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};
