import { useState } from 'react';

import { ZoomContext } from './ZoomContext';

export const ZoomContextProvider = ({ children }) => {
  const [activeObject, setActiveObject] = useState('DEFAULT_CAMERA');

  const value = {
    activeObject,
    setActiveObject,
  };
  return <ZoomContext.Provider value={value}>{children}</ZoomContext.Provider>;
};
