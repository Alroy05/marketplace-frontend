import React from 'react';
import Card from './Card';

const ProductList = ({ products }) => {
  return (
    <div className="min-h-screen top-0 relative flex flex-wrap justify-center p-4 bg-gradient-to-tr from-[#3a210e] via-[#131111] to-[#3a210e] overflow-hidden">
      <div className="absolute inset-0 bg- opacity-10 blur-lg"></div>
      <h1 className='font-tenorSans font-bold text-center text-4xl md:text-5xl m-5 text-[#ebcfbf]'>Welcome to Alroy Pereira's Art Studio</h1>
      <div className="relative z-10 flex flex-wrap justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            showAddToCart={true} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
