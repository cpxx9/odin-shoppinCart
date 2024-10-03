import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import HomeCards from '../components/HomeCards/HomeCards';
import Listings from '../components/Listings/Listings';

const Root = () => {
  const [cart, setCart] = useOutletContext();
  return (
    <>
      <Hero
        title={'Odin Storefront'}
        subtitle={'Any fake product your heart may desire!'}
      />
      <HomeCards />
      <Listings isHome={true} cart={cart} setCart={setCart} />
    </>
  );
};

export default Root;
