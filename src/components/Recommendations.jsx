// src/components/Recommendations.jsx
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Recommendations = ({ uploadedImageUrl }) => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (uploadedImageUrl) {
      fetchRecommendations();
    }
  }, [uploadedImageUrl]);

  const fetchRecommendations = async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://api.example.com/recommendations?image=${uploadedImageUrl}`);
      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {uploadedImageUrl && (
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Uploaded Image</h2>
          <img src={uploadedImageUrl} alt="Uploaded" className="max-w-full mb-4 rounded shadow-md" />
        </div>
      )}

      {uploadedImageUrl && (
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Jewellery</h2>
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendations.map((item) => (
                <div key={item.id} className="p-4 border border-gray-200 rounded-lg shadow-md">
                  <img src={item.image} alt={item.name} className="w-full mb-2 rounded" />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          )}
          {!loading && recommendations.length === 0 && (
            <p className="text-lg">No recommendations found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
