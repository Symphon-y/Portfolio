import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Experience from '../components/experience/Experience';
import App from '../App';
import MobileExperience from '../components/mobile/MobileExperience';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: ' ',
    children: [
      {
        path: '/home',
        element: <Experience />,
      },
      {
        path: '/mobile',
        element: <MobileExperience />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
