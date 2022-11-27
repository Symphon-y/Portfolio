import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Experience from '../components/experience/Experience';
import App from '../App';
import MobileExperience from '../components/mobile/MobileExperience';
import ComingSoon from '../components/comingsoon/ComingSoon';

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
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
