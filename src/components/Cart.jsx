// Cart.jsx
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md">
              <img src={item.imageUrl} alt={item.title} className="w-full mb-2 rounded" />
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm">${item.price}</p>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white rounded px-4 py-2 mt-2 hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
