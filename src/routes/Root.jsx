import Hero from '../components/Hero/Hero';
import HomeCards from '../components/HomeCards/HomeCards';
import Listings from '../components/Listings/Listings';

const Root = () => {
  return (
    <>
      <Hero
        title={'Odin Storefront'}
        subtitle={'Any fake product your heart may desire!'}
      />
      <HomeCards />
      <Listings isHome={true} />
    </>
  );
};

export default Root;
