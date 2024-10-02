import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section>
      <Card>
        <h2>Store</h2>
        <p>
          Browse our collection of PC&apos;s and start being more productive
          today
        </p>
        <Link to={'/store'}>Browse PC&apos;s</Link>
      </Card>
      <Card>
        <h2>Community</h2>
        <p>
          Take a look at the community for helpful tips, or a place to chat!
        </p>
        <Link to={'/community'}>Explore</Link>
      </Card>
    </section>
  );
};

export default HomeCards;
