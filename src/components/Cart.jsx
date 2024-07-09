import React, { useEffect, useState } from 'react';
import { FaEthereum } from "react-icons/fa";
import toast from 'react-hot-toast';

const Cart = ({ products, setProducts }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get the cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const items = products.filter(product => cart.includes(product.id));
    setCartItems(items);
  }, [products]);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart.map(item => item.id)));
    toast.success('Item Removed Successfully.');
  };

  const handleCheckout = () => {
    // Clear the cart in local storage
    localStorage.setItem('cart', JSON.stringify([]));

    // Remove purchased items from the product list
    const updatedProducts = products.filter(product => !cartItems.some(cartItem => cartItem.id === product.id));
    setProducts(updatedProducts);

    // Clear the cart items state
    setCartItems([]);
    toast.success('Payment Successfull!');
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#3a210e] via-[#131111] to-[#3a210e] font-tenorSans">
      <div className="w-full max-w-md bg-[#131111] p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-[#9f5f2d] mb-6">Cart</h1>
        {
          cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <p className="text-[#ebcfbf] font-semibold">{item.title}</p>
              <div className="flex items-center">
                <FaEthereum className="text-lg mr-1 text-[#9f5f2d]" />
                <p className="text-[#9f5f2d]">${item.price}</p>
              </div>
            </div>
            <button 
              className="text-red-500"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))
        }
        <hr className="border-gray-600 mb-4" />
        <div className="flex justify-between items-center mb-6">
          <p className="text-[#ebcfbf]">Total:</p>
          <div className="flex items-center">
            <FaEthereum className="text-lg mr-1 text-[#b89785]" />
            <p className="text-[#ebcfbf]">{totalCost}</p>
          </div>
        </div>
        {cartItems.length > 0 && (
          <button
            className="w-full border border-[#9f5f2d] rounded-full bg-transparent hover:bg-[#9f5f2d] text-[#9f5f2d] hover:text-black font-bold py-3 px-6"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
