import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import { routes } from './routes/routes';
import { ZoomContextProvider } from './context/ZoomContextProvider';
import './index.css';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ZoomContextProvider>
      <AnimatePresence>
        <RouterProvider router={routes} />
      </AnimatePresence>
    </ZoomContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
