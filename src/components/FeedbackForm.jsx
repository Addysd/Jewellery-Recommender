// src/components/FeedbackForm.jsx

import React, { useState } from 'react';
import axios from 'axios';


const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
    setSubmitStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!feedback.trim()) {
      setSubmitStatus('Please enter your feedback.');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Feedback submitted:', feedback);

      setSubmitStatus('Feedback submitted successfully.');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('Error submitting feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Provide Feedback</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="feedbackInput" className="font-bold">Feedback:</label>
          <textarea
            id="feedbackInput"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
      {submitStatus && <p className="mt-4 font-semibold">{submitStatus}</p>}
    </div>
  );
};

export default FeedbackForm;
