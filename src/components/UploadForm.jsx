// src/components/UploadForm.jsx
import React, { useState } from 'react';

const UploadForm = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

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

    try {
      console.log('File uploaded:', selectedFile);
      setUploadStatus('File uploaded successfully.');
      onImageUpload(URL.createObjectURL(selectedFile));
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fileInput" className="font-bold">Choose file:</label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-800 transition-colors"
        >
          Upload
        </button>
      </form>
      {uploadStatus && <p className="mt-4 font-semibold">{uploadStatus}</p>}
    </div>
  );
};

export default UploadForm;
