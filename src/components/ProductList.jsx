// src/components/ProductList.jsx

import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
