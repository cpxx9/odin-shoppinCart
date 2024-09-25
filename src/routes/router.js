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
