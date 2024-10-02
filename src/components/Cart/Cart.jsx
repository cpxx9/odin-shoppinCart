import { useState } from 'react';

const Cart = ({ items = [] }) => {
  const [cartItems, setCartItems] = useState(items);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    const open = !isOpen;
    setIsOpen(open);
  };

  return (
    <div>
      <span onClick={openCart}>Cart</span>
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
