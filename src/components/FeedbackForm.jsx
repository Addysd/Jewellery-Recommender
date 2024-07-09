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
      // Simulated post request (replace with actual API endpoint)
      // const response = await axios.post('/api/submit-feedback', { feedback });
      
      // For demonstration, log feedback to console
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
    <div className="max-w-2xl mx-auto p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Provide Feedback</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="feedbackInput" className="font-bold">Feedback:</label>
          <textarea
            id="feedbackInput"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
            className="w-full p-2 mt-2 resize-vertical"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-900 text-white rounded px-5 py-3 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
      {submitStatus && <p className="mt-4 text-lg font-bold text-green-500">{submitStatus}</p>}
    </div>
  );
};

export default FeedbackForm;
