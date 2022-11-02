// import { useState, useEffect } from 'react';
// import { useBounds } from '@react-three/drei';
// import { useThree } from '@react-three/fiber';
// const ClickToZoom = ({ children }) => {
//   return (
//     <group
//       onClick={(e) => (
//         e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit()
//       )}
//       onPointerMissed={(e) => {
//         console.log(e);
//         return e.button === 0 && bounds.refresh().fit();
//       }}>
//       {children}
//     </group>
//   );
// };

// export default ClickToZoom;
