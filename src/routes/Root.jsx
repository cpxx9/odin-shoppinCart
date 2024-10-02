import Hero from '../components/Hero/Hero';
import HomeCards from '../components/HomeCards/HomeCards';
import Listings from '../components/Listings/Listings';

const Root = () => {
  return (
    <>
      <Hero
        title={"React Custom PC's"}
        subtitle={"Custom built PC's, no matter your needs"}
      />
      <HomeCards />
      <Listings isHome={true} />
    </>
  );
};

export default Root;
