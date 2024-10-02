import { useState, useEffect } from 'react';
import Listing from '../Listing/Listing';
import PropTypes from 'prop-types';

import { RingLoader } from 'react-spinners';

const Listings = ({ isHome = false }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const apiUrl = `https://fakestoreapi.com/products${isHome ? '?limit=3' : ''}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);
};

Listings.propTypes = {
  isHome: PropTypes.bool,
};

export default Listings;
