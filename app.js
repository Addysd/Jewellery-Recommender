// app.js

const { useState } = React;

const jewelryDataset = [
  { name: 'Necklace', imageUrl: 'path/to/necklace.jpg' },
  { name: 'Earrings', imageUrl: 'path/to/earrings.jpg' },
  { name: 'Bracelet', imageUrl: 'path/to/bracelet.jpg' },
  { name: 'Ring', imageUrl: 'path/to/ring.jpg' },
  { name: 'Anklet', imageUrl: 'path/to/anklet.jpg' },
  // Add more jewelry items with image URLs...
];

const ImageUpload = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onImageUpload(file);
  };

  return (
    <div>
      <label className="label-file" htmlFor="file-upload">Upload Dress Image</label>
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

const ImageDisplay = ({ image }) => {
  return (
    <div>
      {image ? <img src={image} alt="Dress" /> : <p>No image uploaded</p>}
    </div>
  );
};

const Recommendations = ({ items }) => {
  return (
    <div>
      <h2>Recommended Jewelry</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Feedback = ({ onFeedbackSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFeedbackSubmit(feedback);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Leave your feedback here"
        rows="4"
        cols="50"
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

const App = () => {
  const [image, setImage] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      // Simulate backend call to get recommendations
      setTimeout(() => {
        setRecommendations(jewelryDataset.slice(0, 3)); // Mocked selection
      }, 1000);
    };
    reader.readAsDataURL(file);
  };

  const handleFeedbackSubmit = (feedback) => {
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div>
      <h1>Jewelry Recommendation</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      <ImageDisplay image={image} />
      <Recommendations items={recommendations} />
      <Feedback onFeedbackSubmit={handleFeedbackSubmit} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
