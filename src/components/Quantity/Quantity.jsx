import { useState } from 'react';

const Quantity = ({ item, cart, setCart }) => {
  const increaseQuantity = () => {};

  const isInCart = (cartItem) => {
    return cartItem.id === item.id;
  };
  return (
    <div>
      <div>
        <button onClick={() => {}}>-</button>
        <p>{0}</p>
        <button onClick={() => {}}>+</button>
      </div>
      <button onClick={() => {}}>Clear</button>
    </div>
  );
};

export default Quantity;
