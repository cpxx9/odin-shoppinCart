import { useState } from 'react';

const Cart = ({ items = [], isOpen = false }) => {
  const [cartItems, setCartItems] = useState(items);

  return (
    <div>
      <span>Cart</span>
      {isOpen ? (
        <ul>
          {cartItems.map((cartItem) => {
            <li key={cartItem.id}>
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
            </li>;
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
