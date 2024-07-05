import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cart = ({ products, setProducts }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get the cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const items = products.filter(product => cart.includes(product.id));
    setCartItems(items);
  }, [products]);

  const handleCheckout = () => {
    // Clear the cart in local storage
    localStorage.setItem('cart', JSON.stringify([]));
    
    // Remove purchased items from the product list
    const updatedProducts = products.filter(product => !cartItems.some(cartItem => cartItem.id === product.id));
    setProducts(updatedProducts);

    // Clear the cart items state
    setCartItems([]);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            showAddToCart={false} // Hide the Add to Cart button
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total Cost: ${totalCost}</h3>
      </div>
      {cartItems.length > 0 && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
