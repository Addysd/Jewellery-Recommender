// src/App.jsx

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import UploadForm from './components/UploadForm';
import FeedbackForm from './components/FeedbackForm';
import Recommendations from './components/Recommendations';

const App = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl);
  };

  const products = [
    // Sample product data
    { id: 1, imageUrl: 'path/to/image1.jpg', title: 'Product 1', description: 'Description for product 1', price: '19.99' },
    { id: 2, imageUrl: 'path/to/image2.jpg', title: 'Product 2', description: 'Description for product 2', price: '29.99' },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 id="products" className="text-2xl font-bold mb-4">Products</h2>
        <UploadForm onImageUpload={handleImageUpload} />
        <ProductList products={products} />
        <Recommendations uploadedImageUrl={uploadedImageUrl} />
        <FeedbackForm />
      </main>
      <footer className="bg-blue-600 text-white w-full p-4 text-center mt-auto">
        <p>&copy; 2024 My Jewellery-Recommender Site</p>
      </footer>
    </div>
  );
};

export default App;
