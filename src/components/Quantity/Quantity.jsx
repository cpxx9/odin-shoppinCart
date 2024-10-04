import { useState } from 'react';

const Quantity = ({ item, cart, setCart }) => {
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);

  const increaseQuantity = () => {
    if (index > -1) {
      const newCart = [...cart];
      console.log(index);
      console.log(newCart[index]);
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart, item];
      newCart[newCart.length - 1].quantity = 1;
      setCart(newCart);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => {}}>-</button>
        <p>{index > -1 ? cart[index].quantity : '0'}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={() => {}}>Clear</button>
    </div>
  );
};

export default Quantity;
