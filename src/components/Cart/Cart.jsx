import { useState } from 'react';
import Quantity from '../Quantity/Quantity';

const Cart = ({ cart = [], setCart = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(cart);

  const toggleCart = () => {
    const open = !isOpen;
    setIsOpen(open);
  };

  return (
    <div>
      <span onClick={toggleCart}>Cart</span>
      {isOpen ? (
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
              <Quantity item={cartItem} cart={cart} setCart={setCart} />
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
