import { useState } from 'react';

const Quantity = ({ quantity = 0 }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const decreaseQuantity = () => {
    if (itemQuantity < 1) {
      return;
    }
    const newQuantity = itemQuantity - 1;
    setItemQuantity(newQuantity);
  };

  const increaseQuantity = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
  };

  const clearQuantity = () => {
    setItemQuantity(0);
  };

  return (
    <div>
      <div>
        <button onClick={decreaseQuantity}>-</button>
        <p>{itemQuantity}</p>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={clearQuantity}>Clear</button>
    </div>
  );
};

export default Quantity;
