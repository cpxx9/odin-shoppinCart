import { useState, useEffect } from 'react';
import Listing from '../Listing/Listing';
import PropTypes from 'prop-types';

import { RingLoader } from 'react-spinners';

const Listings = ({ isHome = false, cart = [], setCart = () => {} }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const apiUrl = `https://fakestoreapi.com/products${isHome ? '?limit=3' : ''}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <section>
      <div>
        <h2>{isHome ? 'Recent listings' : 'Browse Listings'}</h2>
        {loading ? (
          // <RingLoader loading={loading} />
          <div>test</div>
        ) : (
          <div>
            {items.map((item) => (
              <Listing
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

Listings.propTypes = {
  isHome: PropTypes.bool,
};

export default Listings;
