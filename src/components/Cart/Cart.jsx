import { useState } from 'react';
import Quantity from '../Quantity/Quantity';
import StyledCart from './StyledCart';

const Cart = ({ cart = [], setCart = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    const open = !isOpen;
    setIsOpen(open);
  };

  document.addEventListener('click', (e) => {
    console.log(e.target);
  });

  return (
    <StyledCart>
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
    </StyledCart>
  );
};

export default Cart;
