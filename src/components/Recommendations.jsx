import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Recommendations = ({ uploadedImageUrl }) => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (uploadedImageUrl) {
      fetchRecommendations();
    }
  }, [uploadedImageUrl]);

  const fetchRecommendations = async () => {
    setLoading(true); // Set loading to true when fetching recommendations

    try {
      // Simulating API call to get recommendations based on uploaded image
      const response = await fetch(`http://api.example.com/recommendations?image=${uploadedImageUrl}`);
      const data = await response.json();

      // Assuming recommendations are received as an array of objects
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false); // Set loading to false after recommendations are fetched
    }
  };

  return (
    <div>
      {uploadedImageUrl && (
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Uploaded Image</h2>
          <img src={uploadedImageUrl} alt="Uploaded" className="max-w-full mb-4" />
        </div>
      )}

      {uploadedImageUrl && (
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Jewellery</h2>

          {/* Conditionally render Spinner based on loading state */}
          {loading && <Spinner />}

          {/* Render recommendations if not loading */}
          {!loading && recommendations.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {recommendations.map((item) => (
                <div key={item.id} className="p-4 border border-gray-200 rounded">
                  <img src={item.image} alt={item.name} className="w-full mb-2 rounded" />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* Display message if no recommendations */}
          {!loading && recommendations.length === 0 && (
            <p className="text-lg">No recommendations found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
