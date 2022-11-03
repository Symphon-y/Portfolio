import { useState, useRef } from 'react';
import { KeyboardContext } from './KeyboardContext';
import { useSpring, config } from '@react-spring/three';

export const KeyboardContextProvider = ({ children }) => {
  //SECTION - Key State
  const [backquote, setBackquote] = useState(false);
  const [keyA, setKeyA] = useState(false);
  const [keyZ, setKeyZ] = useState(false);
  const [tab, setTab] = useState(false);
  const [keyQ, setKeyQ] = useState(false);
  const [capsLock, setCapsLock] = useState(false);
  const [shiftLeft, setShiftLeft] = useState(false);
  const [space, setSpace] = useState(false);
  const [controlLeft, setControlLeft] = useState(false);
  const [altLeft, setAltLeft] = useState(false);
  const [altRight, setAltRight] = useState(false);
  const [controlRight, setControlRight] = useState(false);
  const [backslash, setBackslash] = useState(false);
  const [backspace, setBackspace] = useState(false);
  const [enter, setEnter] = useState(false);
  const [shiftRight, setShiftRight] = useState(false);
  const [digit1, setDigit1] = useState(false);
  const [digit2, setDigit2] = useState(false);

  //SECTION - Key Refs
  const backquoteRef = useRef();
  const keyARef = useRef();
  const keyZRef = useRef();
  const tabRef = useRef();
  const keyQRef = useRef();
  const capsLockRef = useRef();
  const shiftLeftRef = useRef();
  const spaceRef = useRef();
  const controlLeftRef = useRef();
  const altLeftRef = useRef();
  const altRightRef = useRef();
  const controlRightRef = useRef();
  const backslashRef = useRef();
  const backspaceRef = useRef();
  const enterRef = useRef();
  const shiftRightRef = useRef();
  const digit1Ref = useRef();
  const digit2Ref = useRef();

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
  const { keyZPosition } = useSpring({
    keyZPosition: keyZ
      ? [-0.06729859, -0.0031249, 0.01502963]
      : [-0.06729859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { tabPosition } = useSpring({
    tabPosition: tab
      ? [-0.09473687, 0.00162915, -0.01492494]
      : [-0.09473687, 0.00162915, -0.01492494],
    config: config.wobbly,
  });
  const { keyQPosition } = useSpring({
    keyQPosition: keyQ
      ? [-0.0772986, -0.00344518, -0.01492925]
      : [-0.0772986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { capsLockPosition } = useSpring({
    capsLockPosition: capsLock
      ? [-0.09223933, -0.0029753, 0.00005654]
      : [-0.09223933, 0.0009753, 0.00005654],
    config: config.wobbly,
  });
  const { shiftLeftPosition } = useSpring({
    shiftLeftPosition: shiftLeft
      ? [-0.08969236, -0.00328382, 0.01503743]
      : [-0.08969236, 0.00028382, 0.01503743],
    config: config.wobbly,
  });
  const { spacePosition } = useSpring({
    spacePosition: space
      ? [-0.0101736, -0.00318264, 0.03002318]
      : [-0.0101736, -0.00018264, 0.03002318],
    config: config.wobbly,
  });
  const { controlLeftPosition } = useSpring({
    controlLeftPosition: controlLeft
      ? [-0.0963335, -0.00382607, 0.03001072]
      : [-0.0963335, -0.00082607, 0.03001072],
    config: config.wobbly,
  });
  const { altLeftPosition } = useSpring({
    altLeftPosition: altLeft
      ? [-0.06276722, -0.00384373, 0.03001156]
      : [-0.06276722, -0.00084373, 0.03001156],
    config: config.wobbly,
  });
  const { altRightPosition } = useSpring({
    altRightPosition: altRight
      ? [0.04288521, -0.00384373, 0.03001156]
      : [0.04288521, -0.00084373, 0.03001156],
    config: config.wobbly,
  });
  const { controlRightPosition } = useSpring({
    controlRightPosition: controlRight
      ? [0.09589116, -0.00365773, 0.03001444]
      : [0.09589116, -0.00065773, 0.03001444],
    config: config.wobbly,
  });
  const { backslashPosition } = useSpring({
    backslashPosition: backslash
      ? [0.09729859, -0.00062915, -0.01492494]
      : [0.09729859, 0.00162915, -0.01492494],
    config: config.wobbly,
  });
  const { backspacePosition } = useSpring({
    backspacePosition: backspace
      ? [0.09432064, -0.00253688, -0.02940276]
      : [0.09432064, 0.00253688, -0.02940276],
    config: config.wobbly,
  });
  const { enterPosition } = useSpring({
    enterPosition: enter
      ? [0.09277438, -0.00105213, 0.00005773]
      : [0.09277438, 0.00105213, 0.00005773],
    config: config.wobbly,
  });
  const { shiftRightPosition } = useSpring({
    shiftRightPosition: shiftRight
      ? [0.0882763, -0.00338399, 0.01503898]
      : [0.0882763, 0.00038399, 0.01503898],
    config: config.wobbly,
  });
  const { digit1Position } = useSpring({
    digit1Position: digit1
      ? [-0.08299859, -0.00320405, -0.02940938]
      : [-0.08299859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit2Position } = useSpring({
    digit2Position: digit2
      ? [-0.06869859, -0.00320405, -0.02940938]
      : [-0.06869859, 0.00220405, -0.02940938],
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

    KeyA: keyA,
    keyARef: keyARef,
    keyAPosition: keyAPosition,
    setKeyA: setKeyA,

    KeyZ: keyZ,
    keyZRef: keyZRef,
    keyZPosition: keyZPosition,
    setKeyZ: setKeyZ,

    Tab: tab,
    tabRef: tabRef,
    tabPosition: tabPosition,
    setTab: setTab,

    KeyQ: keyQ,
    keyQRef: keyQRef,
    keyQPosition: keyQPosition,
    setKeyQ: setKeyQ,

    CapsLock: capsLock,
    capsLockRef: capsLockRef,
    capsLockPosition: capsLockPosition,
    setCapsLock: setCapsLock,

    ShiftLeft: shiftLeft,
    shiftLeftRef: shiftLeftRef,
    shiftLeftPosition: shiftLeftPosition,
    setShiftLeft: setShiftLeft,

    Space: space,
    spaceRef: spaceRef,
    spacePosition: spacePosition,
    setSpace: setSpace,

    ControlLeft: controlLeft,
    controlLeftRef: controlLeftRef,
    controlLeftPosition: controlLeftPosition,
    setControlLeft: setControlLeft,

    AltLeft: altLeft,
    altLeftRef: altLeftRef,
    altLeftPosition: altLeftPosition,
    setAltLeft: setAltLeft,

    AltRight: altRight,
    altRightRef: altRightRef,
    altRightPosition: altRightPosition,
    setAltRight: setAltRight,

    ControlRight: controlRight,
    controlRightRef: controlRightRef,
    controlRightPosition: controlRightPosition,
    setControlRight: setControlRight,

    Backslash: backslash,
    backslashRef: backslashRef,
    backslashPosition: backslashPosition,
    setBackslash: setBackslash,

    Backspace: backspace,
    backspaceRef: backspaceRef,
    backspacePosition: backspacePosition,
    setBackspace: setBackspace,

    Enter: enter,
    enterRef: enterRef,
    enterPosition: enterPosition,
    setEnter: setEnter,

    ShiftRight: shiftRight,
    shiftRightRef: shiftRightRef,
    shiftRightPosition: shiftRightPosition,
    setShiftRight: setShiftRight,

    Digit1: digit1,
    digit1Ref: digit1Ref,
    digit1Position: digit1Position,
    setDigit1: setDigit1,

    Digit2: digit2,
    digit2Ref: digit2Ref,
    digit2Position: digit2Position,
    setDigit2: setDigit2,
  };

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};
