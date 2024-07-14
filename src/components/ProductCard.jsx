// ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-5 w-70 shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105">
      <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded-md mb-3" />
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-500">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
