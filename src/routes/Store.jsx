import { useOutletContext } from 'react-router-dom';
import Listings from '../components/Listings/Listings';

const Store = () => {
  const [cart, setCart] = useOutletContext();

  return <Listings cart={cart} setCart={setCart} />;
};

export default Store;
