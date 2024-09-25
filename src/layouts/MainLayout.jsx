import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h2>Main Layout</h2>
      <Outlet />
    </>
  );
};

export default MainLayout;
