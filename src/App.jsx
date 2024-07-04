import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UploadForm from "./components/UploadForm";
import Recommendations from "./components/Recommendations";
import ProductList from "./components/ProductList"; 
import FeedbackForm from "./components/FeedbackForm";
const App = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl);
  };

  return (
    <div>
      <Navbar />
      <UploadForm onImageUpload={handleImageUpload} />
      <Recommendations uploadedImageUrl={uploadedImageUrl} />
      <ProductList products={products}/>
      <FeedbackForm/>
    </div>
  );
};

export default App;
