import React, { useState, useEffect } from 'react';
import { FaEthereum } from "react-icons/fa";
import toast from 'react-hot-toast';

const Card = ({ id, image, title, description, price, showAddToCart }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
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
    toast.success('Item Added Successfully.');
  };

  const handleRemoveFromCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.includes(id)) {
      cart = cart.filter(cartId => cartId !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    setInCart(false);
    toast.success('Item Removed Successfully.');
  };

  return (
    <div className="max-w-xs overflow-hidden m-4 flex flex-col font-tenorSans">
      <img className="w-full" src={image} alt={title} loading="lazy" />
      <div className="py-4 flex-grow">
        <div className="font-bold text-[#b89785] text-xl mb-2">{title}</div>
        <p className="text-base mb-2 text-[#9f5f2d]">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaEthereum className="text-lg mr-1 text-[#b89785]" />
            <span className="text-base font-semibold text-[#b89785]">{price} ETH</span>
          </div>
          {showAddToCart && (
            <div>
              {inCart ? (
                <button
                  className="bg-transparent hover:bg-[#1b0f07] text-red-300 border border-red-300 font-bold py-1 px-5 rounded-full text-sm"
                  onClick={handleRemoveFromCart}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="bg-transparent hover:bg-[#9f5f2d] text-[#9f5f2d] hover:text-black border border-[#9f5f2d] font-bold py-1 px-5 rounded-full text-sm"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
