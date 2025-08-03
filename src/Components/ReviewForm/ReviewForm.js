import React, { useState } from 'react';
import "./ReviewForm.css";

// Function component for giving reviews
function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Show the form when the button is clicked
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, review, rating } = formData;

    if (name && review && rating > 0) {
      setShowWarning(false);
      setSubmittedMessage(formData);
      setFormData({
        name: '',
        review: '',
        rating: 0
      });
      setShowForm(false); // optional: hide form after submission
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="page">
      <h2>Form with Message</h2>
      <br />
      <br />

      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>

          {showWarning && <p className="warning">Please fill out all fields.</p>}

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="rating">Rating (1–5):</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}

      {submittedMessage && (
        <div className="submitted-message">
          <h3>Submitted Message:</h3>
          <p><strong>Name:</strong> {submittedMessage.name}</p>
          <p><strong>Review:</strong> {submittedMessage.review}</p>
          <p><strong>Rating:</strong> {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
