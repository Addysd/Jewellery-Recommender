import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css'; // Import your CSS for styling

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setUploadStatus('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsUploading(true);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        }
      });
      setUploadStatus('File uploaded successfully.');
      console.log(response.data); // Handle backend response as needed
    } catch (error) {
      if (error.response && error.response.data) {
        setUploadStatus('Error: ' + error.response.data.message);
      } else if (error.message) {
        setUploadStatus('Error: ' + error.message);
      } else {
        setUploadStatus('Error uploading file.');
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-form-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <label className="upload-label">
          <input type="file" onChange={handleFileChange} className="upload-input" />
          <span className="upload-button">Choose File</span>
        </label>
        <button type="submit" className="upload-button" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <p className="upload-progress">Uploading: {uploadProgress}%</p>
      )}
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
};

export default UploadForm;
