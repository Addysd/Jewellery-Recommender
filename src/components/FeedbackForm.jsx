import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Import your CSS for styling

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
    <div className="feedback-form-container">
      <h2>Provide Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedbackInput">Feedback:</label>
          <textarea
            id="feedbackInput"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
            className="feedback-input"
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </div>
  );
};

export default FeedbackForm;
