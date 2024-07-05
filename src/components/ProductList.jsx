import React from 'react';
import Card from './Card';

const ProductList = ({ products, setProducts }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          showAddToCart={true} // Show the Add to Cart button
        />
      ))}
    </div>
  );
};

export default ProductList;
