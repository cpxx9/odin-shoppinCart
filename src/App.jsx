import './styles/App.css';

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Root from './routes/Root';
import Store from './routes/Store';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Root />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
