import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Quantity from '../Quantity/Quantity';

const Listing = ({ item, cart, setCart }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = item.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div key={item.id}>
      <div>
        <div>
          <h4>{item.category}</h4>
          <h3>{item.title}</h3>
        </div>

        <p>{description}</p>
        <button onClick={() => setShowFullDescription(!showFullDescription)}>
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3>
          {item.rating.rate} stars with {item.rating.count} reviews
        </h3>

        <Quantity setCart={setCart} cart={cart} item={item} />
        <h4>${item.price}</h4>

        <Link to={`/item/${item.id}`}>Item page</Link>
      </div>
    </div>
  );
};

Listing.propTypes = {
  item: PropTypes.object,
};

export default Listing;
