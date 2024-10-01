import MainLayout from '../layouts/MainLayout';
import Root from './Root';
import Store from './Store';
import NotFound from './NotFound';

const routesConfig = [
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
];

export default routesConfig;
