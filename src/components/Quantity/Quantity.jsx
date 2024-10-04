import { useState } from 'react';

import StyledQuantity from './StyledQuantity';

const Quantity = ({ item, cart, setCart }) => {
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);

  const increaseQuantity = () => {
    if (index > -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart, item];
      newCart[newCart.length - 1].quantity = 1;
      setCart(newCart);
    }
  };

  const decreaseQuantity = () => {
    if (index > -1) {
      const newCart = [...cart];
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) newCart.splice(index, 1);
      setCart(newCart);
    } else {
      return;
    }
  };

  const clearCart = () => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <StyledQuantity>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <p>{index > -1 ? cart[index].quantity : '0'}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={clearCart}>Clear</button>
    </StyledQuantity>
  );
};

export default Quantity;
