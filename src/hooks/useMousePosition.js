import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  console.log(position);
  useEffect(() => {
    const setFromEvent = (e) => {
      const x = ((e.clientX / e.target.offsetHeight - 0.5) * -Math.PI) / 8;
      const y = ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8;
      setPosition({ x: x, y: y });
    };
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};
