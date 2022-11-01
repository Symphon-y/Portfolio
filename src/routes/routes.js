import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Experience from '../components/experience/Experience';
import App from '../App';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Experience />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
