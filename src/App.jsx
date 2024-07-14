// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import FeedbackForm from './components/FeedbackForm';
import ProductList from './components/ProductList';
import Recommendations from './components/Recommendations';
import Cart from './components/Cart';

const App = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [cart, setCart] = useState([]);

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const products = [
    { id: 1, imageUrl: 'src/assets/image1.jpg', title: 'Product 1', description: 'Description for product 1', price: '19.99' },
    { id: 2, imageUrl: 'src/assets/image2.jpg', title: 'Product 2', description: 'Description for product 2', price: '29.99' },
    // Add more products as needed
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar cart={cart} />
        <main className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <UploadForm onImageUpload={handleImageUpload} />
                  <Recommendations uploadedImageUrl={uploadedImageUrl} />
                </>
              }
            />
            <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
        <footer className="bg-white text-black w-full py-4 text-center mt-auto">
          <p>&copy; 2024 My Jewellery-Recommender Site</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
