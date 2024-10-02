import { useState, useEffect } from 'react';
import Listing from '../Listing/Listing';
import PropTypes from 'prop-types';

import { RingLoader } from 'react-spinners';

const Listings = ({ isHome = false }) => {
  return <div>Listings</div>;
};

Listings.propTypes = {
  isHome: PropTypes.bool,
};

export default Listings;
