import { useState } from 'react';

const Quantity = ({ setItems, items, itemIndex }) => {
  const decreaseQuantity = () => {
    if (items[itemIndex].quantity < 1) {
      return;
    }

    const newItems = [...items];
    newItems[itemIndex].quantity = newItems[itemIndex].quantity - 1;

    setItems(newItems);
  };

  const increaseQuantity = () => {
    const newItems = [...items];
    newItems[itemIndex].quantity = newItems[itemIndex].quantity + 1;

    setItems(newItems);
  };

  const clearQuantity = () => {
    const newItems = [...items];
    newItems[itemIndex].quantity = 0;

    setItems(newItems);
  };

  return (
    <div>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <p>{items[itemIndex].quantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={clearQuantity}>Clear</button>
    </div>
  );
};

export default Quantity;
