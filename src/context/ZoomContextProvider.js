import { useState } from 'react';

import { ZoomContext } from './ZoomContext';

export const ZoomContextProvider = ({ children }) => {
  const [activeObject, setActiveObject] = useState('DEFAULT_CAMERA');
  const [modal, setModal] = useState({
    open: false,
    position: null,
  });
  const value = {
    modal,
    setModal,
    activeObject,
    setActiveObject,
  };
  return <ZoomContext.Provider value={value}>{children}</ZoomContext.Provider>;
};
