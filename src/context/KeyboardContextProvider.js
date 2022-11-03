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
  const [digit3, setDigit3] = useState(false);
  const [digit4, setDigit4] = useState(false);
  const [digit5, setDigit5] = useState(false);
  const [digit6, setDigit6] = useState(false);
  const [digit7, setDigit7] = useState(false);
  const [digit8, setDigit8] = useState(false);
  const [digit9, setDigit9] = useState(false);
  const [digit0, setDigit0] = useState(false);
  const [minus, setMinus] = useState(false);
  const [equal, setEqual] = useState(false);
  const [keyS, setKeyS] = useState(false);
  const [keyD, setKeyD] = useState(false);
  const [keyF, setKeyF] = useState(false);
  const [keyG, setKeyG] = useState(false);
  const [keyH, setKeyH] = useState(false);
  const [keyJ, setKeyJ] = useState(false);
  const [keyK, setKeyK] = useState(false);
  const [keyL, setKeyL] = useState(false);
  const [semicolon, setSemicolon] = useState(false);
  const [quote, setQuote] = useState(false);
  const [keyX, setKeyX] = useState(false);
  const [keyC, setKeyC] = useState(false);
  const [keyV, setKeyV] = useState(false);
  const [keyB, setKeyB] = useState(false);
  const [keyN, setKeyN] = useState(false);
  const [keyM, setKeyM] = useState(false);
  const [comma, setComma] = useState(false);
  const [period, setPeriod] = useState(false);
  const [slash, setSlash] = useState(false);
  const [keyW, setKeyW] = useState(false);
  const [keyE, setKeyE] = useState(false);
  const [keyR, setKeyR] = useState(false);
  const [keyT, setKeyT] = useState(false);
  const [keyY, setKeyY] = useState(false);
  const [keyU, setKeyU] = useState(false);
  const [keyI, setKeyI] = useState(false);
  const [keyO, setKeyO] = useState(false);
  const [keyP, setKeyP] = useState(false);
  const [bracketLeft, setBracketLeft] = useState(false);
  const [bracketRight, setBracketRight] = useState(false);

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
  const digit3Ref = useRef();
  const digit4Ref = useRef();
  const digit5Ref = useRef();
  const digit6Ref = useRef();
  const digit7Ref = useRef();
  const digit8Ref = useRef();
  const digit9Ref = useRef();
  const digit0Ref = useRef();
  const minusRef = useRef();
  const equalRef = useRef();
  const keySRef = useRef();
  const keyDRef = useRef();
  const keyFRef = useRef();
  const keyGRef = useRef();
  const keyHRef = useRef();
  const keyJRef = useRef();
  const keyKRef = useRef();
  const keyLRef = useRef();
  const semicolonRef = useRef();
  const quoteRef = useRef();
  const keyXRef = useRef();
  const keyCRef = useRef();
  const keyVRef = useRef();
  const keyBRef = useRef();
  const keyNRef = useRef();
  const keyMRef = useRef();
  const commaRef = useRef();
  const periodRef = useRef();
  const slashRef = useRef();
  const keyWRef = useRef();
  const keyERef = useRef();
  const keyRRef = useRef();
  const keyTRef = useRef();
  const keyYRef = useRef();
  const keyURef = useRef();
  const keyIRef = useRef();
  const keyORef = useRef();
  const keyPRef = useRef();
  const bracketLeftRef = useRef();
  const bracketRightRef = useRef();

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
  const { digit3Position } = useSpring({
    digit3Position: digit3
      ? [-0.05439859, -0.00520405, -0.02940938]
      : [-0.05439859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit4Position } = useSpring({
    digit4Position: digit4
      ? [-0.0400986, -0.00520405, -0.02940938]
      : [-0.0400986, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit5Position } = useSpring({
    digit5Position: digit5
      ? [-0.0257986, -0.00520405, -0.02940938]
      : [-0.0257986, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit6Position } = useSpring({
    digit6Position: digit6
      ? [-0.01149859, -0.00520405, -0.02940938]
      : [-0.01149859, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit7Position } = useSpring({
    digit7Position: digit7
      ? [0.0028014, -0.00520405, -0.02940938]
      : [0.0028014, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit8Position } = useSpring({
    digit8Position: digit8
      ? [0.01710142, -0.00520405, -0.02940938]
      : [0.01710142, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit9Position } = useSpring({
    digit9Position: digit9
      ? [0.03140141, -0.00520405, -0.02940938]
      : [0.03140141, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { digit0Position } = useSpring({
    digit0Position: digit0
      ? [0.04570143, -0.00520405, -0.02940938]
      : [0.04570143, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { minusPosition } = useSpring({
    minusPosition: minus
      ? [0.06000142, -0.00520405, -0.02940938]
      : [0.06000142, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { equalPosition } = useSpring({
    equalPosition: equal
      ? [0.07430142, -0.00520405, -0.02940938]
      : [0.07430142, 0.00220405, -0.02940938],
    config: config.wobbly,
  });
  const { keySPosition } = useSpring({
    keySPosition: keyS
      ? [-0.05799859, -0.00366014, 0.00005019]
      : [-0.05799859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyDPosition } = useSpring({
    keyDPosition: keyD
      ? [-0.04369859, -0.00366014, 0.00005019]
      : [-0.04369859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyFPosition } = useSpring({
    keyFPosition: keyF
      ? [-0.02939859, -0.00366014, 0.00005019]
      : [-0.02939859, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyGPosition } = useSpring({
    keyGPosition: keyG
      ? [-0.0150986, -0.00366014, 0.00005019]
      : [-0.0150986, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyHPosition } = useSpring({
    keyHPosition: keyH
      ? [-0.0007986, -0.00366014, 0.00005019]
      : [-0.0007986, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyJPosition } = useSpring({
    keyJPosition: keyJ
      ? [0.01350141, -0.00366014, 0.00005019]
      : [0.01350141, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyKPosition } = useSpring({
    keyKPosition: keyK
      ? [0.0278014, -0.00366014, 0.00005019]
      : [0.0278014, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyLPosition } = useSpring({
    keyLPosition: keyL
      ? [0.04210142, -0.00366014, 0.00005019]
      : [0.04210142, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { semicolonPosition } = useSpring({
    semicolonPosition: semicolon
      ? [0.05640141, -0.00366014, 0.00005019]
      : [0.05640141, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { quotePosition } = useSpring({
    quotePosition: quote
      ? [0.07070143, -0.00366014, 0.00005019]
      : [0.07070143, 0.00066014, 0.00005019],
    config: config.wobbly,
  });
  const { keyXPosition } = useSpring({
    keyXPosition: keyX
      ? [-0.05299859, -0.0031249, 0.01502963]
      : [-0.05299859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyCPosition } = useSpring({
    keyCPosition: keyC
      ? [-0.03869859, -0.0031249, 0.01502963]
      : [-0.03869859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyVPosition } = useSpring({
    keyVPosition: keyV
      ? [-0.02439859, -0.0031249, 0.01502963]
      : [-0.02439859, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyBPosition } = useSpring({
    keyBPosition: keyB
      ? [-0.0100986, -0.0031249, 0.01502963]
      : [-0.0100986, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyNPosition } = useSpring({
    keyNPosition: keyN
      ? [0.0042014, -0.0031249, 0.01502963]
      : [0.0042014, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyMPosition } = useSpring({
    keyMPosition: keyM
      ? [0.01850141, -0.0031249, 0.01502963]
      : [0.01850141, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { commaPosition } = useSpring({
    commaPosition: comma
      ? [0.0328014, -0.0031249, 0.01502963]
      : [0.0328014, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { periodPosition } = useSpring({
    periodPosition: period
      ? [0.04710142, -0.0031249, 0.01502963]
      : [0.04710142, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { slashPosition } = useSpring({
    slashPosition: slash
      ? [0.06140141, -0.0031249, 0.01502963]
      : [0.06140141, -0.0001249, 0.01502963],
    config: config.wobbly,
  });
  const { keyWPosition } = useSpring({
    keyWPosition: keyW
      ? [-0.06299859, -0.00444518, -0.01492925]
      : [-0.06299859, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyEPosition } = useSpring({
    keyEPosition: keyE
      ? [-0.0486986, -0.00444518, -0.01492925]
      : [-0.0486986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyRPosition } = useSpring({
    keyRPosition: keyR
      ? [-0.0343986, -0.00444518, -0.01492925]
      : [-0.0343986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyTPosition } = useSpring({
    keyTPosition: keyT
      ? [-0.0200986, -0.00444518, -0.01492925]
      : [-0.0200986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyYPosition } = useSpring({
    keyYPosition: keyY
      ? [-0.0057986, -0.00444518, -0.01492925]
      : [-0.0057986, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyUPosition } = useSpring({
    keyUPosition: keyU
      ? [0.0085014, -0.00444518, -0.01492925]
      : [0.0085014, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyIPosition } = useSpring({
    keyIPosition: keyI
      ? [0.0228014, -0.00444518, -0.01492925]
      : [0.0228014, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyOPosition } = useSpring({
    keyOPosition: keyO
      ? [0.03710142, -0.00444518, -0.01492925]
      : [0.03710142, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { keyPPosition } = useSpring({
    keyPPosition: keyP
      ? [0.05140141, -0.00444518, -0.01492925]
      : [0.05140141, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { bracketLeftPosition } = useSpring({
    bracketLeftPosition: bracketLeft
      ? [0.06570143, -0.00444518, -0.01492925]
      : [0.06570143, 0.00144518, -0.01492925],
    config: config.wobbly,
  });
  const { bracketRightPosition } = useSpring({
    bracketRightPosition: bracketRight
      ? [0.08000141, -0.00444518, -0.01492925]
      : [0.08000141, 0.00144518, -0.01492925],
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

    Digit3: digit3,
    digit3Ref: digit3Ref,
    digit3Position: digit3Position,
    setDigit3: setDigit3,

    Digit4: digit4,
    digit4Ref: digit4Ref,
    digit4Position: digit4Position,
    setDigit4: setDigit4,

    Digit5: digit5,
    digit5Ref: digit5Ref,
    digit5Position: digit5Position,
    setDigit5: setDigit5,

    Digit6: digit6,
    digit6Ref: digit6Ref,
    digit6Position: digit6Position,
    setDigit6: setDigit6,

    Digit7: digit7,
    digit7Ref: digit7Ref,
    digit7Position: digit7Position,
    setDigit7: setDigit7,

    Digit8: digit8,
    digit8Ref: digit8Ref,
    digit8Position: digit8Position,
    setDigit8: setDigit8,

    Digit9: digit9,
    digit9Ref: digit9Ref,
    digit9Position: digit9Position,
    setDigit9: setDigit9,

    Digit0: digit0,
    digit0Ref: digit0Ref,
    digit0Position: digit0Position,
    setDigit0: setDigit0,

    Minus: minus,
    minusRef: minusRef,
    minusPosition: minusPosition,
    setMinus: setMinus,

    Equal: equal,
    equalRef: equalRef,
    equalPosition: equalPosition,
    setEqual: setEqual,

    KeyS: keyS,
    keySRef: keySRef,
    keySPosition: keySPosition,
    setKeyS: setKeyS,

    KeyD: keyD,
    keyDRef: keyDRef,
    keyDPosition: keyDPosition,
    setKeyD: setKeyD,

    KeyF: keyF,
    keyFRef: keyFRef,
    keyFPosition: keyFPosition,
    setKeyF: setKeyF,

    KeyG: keyG,
    keyGRef: keyGRef,
    keyGPosition: keyGPosition,
    setKeyG: setKeyG,

    KeyH: keyH,
    keyHRef: keyHRef,
    keyHPosition: keyHPosition,
    setKeyH: setKeyH,

    KeyJ: keyJ,
    keyJRef: keyJRef,
    keyJPosition: keyJPosition,
    setKeyJ: setKeyJ,

    KeyK: keyK,
    keyKRef: keyKRef,
    keyKPosition: keyKPosition,
    setKeyK: setKeyK,

    KeyL: keyL,
    keyLRef: keyLRef,
    keyLPosition: keyLPosition,
    setKeyL: setKeyL,

    Semicolon: semicolon,
    semicolonRef: semicolonRef,
    semicolonPosition: semicolonPosition,
    setSemicolon: setSemicolon,

    Quote: quote,
    quoteRef: quoteRef,
    quotePosition: quotePosition,
    setQuote: setQuote,

    KeyX: keyX,
    keyXRef: keyXRef,
    keyXPosition: keyXPosition,
    setKeyX: setKeyX,

    KeyC: keyC,
    keyCRef: keyCRef,
    keyCPosition: keyCPosition,
    setKeyC: setKeyC,

    KeyV: keyV,
    keyVRef: keyVRef,
    keyVPosition: keyVPosition,
    setKeyV: setKeyV,

    KeyB: keyB,
    keyBRef: keyBRef,
    keyBPosition: keyBPosition,
    setKeyB: setKeyB,

    KeyN: keyN,
    keyNRef: keyNRef,
    keyNPosition: keyNPosition,
    setKeyN: setKeyN,

    KeyM: keyM,
    keyMRef: keyMRef,
    keyMPosition: keyMPosition,
    setKeyM: setKeyM,

    Comma: comma,
    commaRef: commaRef,
    commaPosition: commaPosition,
    setComma: setComma,

    Period: period,
    periodRef: periodRef,
    periodPosition: periodPosition,
    setPeriod: setPeriod,

    Slash: slash,
    slashRef: slashRef,
    slashPosition: slashPosition,
    setSlash: setSlash,

    KeyW: keyW,
    keyWRef: keyWRef,
    keyWPosition: keyWPosition,
    setKeyW: setKeyW,

    KeyE: keyE,
    keyERef: keyERef,
    keyEPosition: keyEPosition,
    setKeyE: setKeyE,

    KeyR: keyR,
    keyRRef: keyRRef,
    keyRPosition: keyRPosition,
    setKeyR: setKeyR,

    KeyT: keyT,
    keyTRef: keyTRef,
    keyTPosition: keyTPosition,
    setKeyT: setKeyT,

    KeyY: keyY,
    keyYRef: keyYRef,
    keyYPosition: keyYPosition,
    setKeyY: setKeyY,

    KeyU: keyU,
    keyURef: keyURef,
    keyUPosition: keyUPosition,
    setKeyU: setKeyU,

    KeyI: keyI,
    keyIRef: keyIRef,
    keyIPosition: keyIPosition,
    setKeyI: setKeyI,

    KeyO: keyO,
    keyORef: keyORef,
    keyOPosition: keyOPosition,
    setKeyO: setKeyO,

    KeyP: keyP,
    keyPRef: keyPRef,
    keyPPosition: keyPPosition,
    setKeyP: setKeyP,

    BracketLeft: bracketLeft,
    bracketLeftRef: bracketLeftRef,
    bracketLeftPosition: bracketLeftPosition,
    setBracketLeft: setBracketLeft,

    BracketRight: bracketRight,
    bracketRightRef: bracketRightRef,
    bracketRightPosition: bracketRightPosition,
    setBracketRight: setBracketRight,
  };

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};
