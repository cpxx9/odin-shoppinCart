import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const MainLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav cart={cart} setCart={setCart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
};

export default MainLayout;
