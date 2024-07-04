// Recommendations.jsx
import React, { useState } from "react";
import Spinner from "./Spinner";

const Recommendations = ({ uploadedImageUrl }) => {
  const [loading, setLoading] = useState(false); // Initial loading state
  const [recommendations, setRecommendations] = useState([]);

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
        <div>
          <h2>Uploaded Image</h2>
          <img src={uploadedImageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}

      {uploadedImageUrl && (
        <div>
          <h2>Recommended Jewellery</h2>

          {/* Conditionally render Spinner based on loading state */}
          {loading && <Spinner />}

          {/* Render recommendations if not loading */}
          {!loading && recommendations.length > 0 && (
            <div className="recommendations">
              {recommendations.map((item) => (
                <div key={item.id} className="recommendation">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* Display message if no recommendations */}
          {!loading && recommendations.length === 0 && (
            <p>No recommendations found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
