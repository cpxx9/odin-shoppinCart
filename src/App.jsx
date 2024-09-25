import './styles/App.css';

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import routesConfig from './routes/router';

import MainLayout from './layouts/MainLayout';
import Root from './routes/Root';
import Store from './routes/Store';
import NotFound from './routes/NotFound';

const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
