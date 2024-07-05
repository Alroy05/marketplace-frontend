import React, { useState, useEffect } from 'react';

const Card = ({ id, image, title, description, price, showAddToCart }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    // Check if the product is already in the cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.includes(id)) {
      setInCart(true);
    }
  }, [id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.includes(id)) {
      cart = cart.filter(cartId => cartId !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    setInCart(false);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <img className="w-full" src={image} alt={title} lazy />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price}
        </span>
      </div>
      {showAddToCart && (
        <div className="px-6 pb-4">
          {inCart ? (
            <button
              className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
