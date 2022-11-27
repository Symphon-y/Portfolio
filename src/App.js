import './App.css';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  //TODO update the route to mobile in production when ready
  useEffect(() => {
    if (isMobile) {
      navigate('/coming-soon');
    } else {
      navigate('/home');
    }
  }, [isMobile, navigate]);

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0 }}
      className='App'>
      <>
        <Outlet />
      </>
    </motion.div>
  );
}

export default App;
