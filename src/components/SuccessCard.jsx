import React from 'react';
import './SuccessCard.css';

/**
 * SuccessCard Component
 * 
 * Rendered after the user successfully submits the form.
 * Displays a clean summary of what was sent and offers
 * a button to reset the form and send another message.
 */
const SuccessCard = ({ submittedData, onReset }) => {
  return (
    <div className="success-card" role="status" aria-live="polite">
      <div className="success-icon-wrapper">
        <svg
          className="success-checkmark"
          viewBox="0 0 52 52"
          fill="none"
          stroke="currentColor"
        >
          <circle
            className="checkmark-circle"
            cx="26"
            cy="26"
            r="23"
            strokeWidth="3"
            stroke="currentColor"
          />
          <path
            className="checkmark-check"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 27l8 8 16-16"
          />
        </svg>
      </div>

      <h2 className="success-title">Message Received!</h2>
      <p className="success-subtitle">
        Thank you, <strong>{submittedData.fullName}</strong>. We have received your inquiry
        and will get back to you at <strong>{submittedData.email}</strong> shortly.
      </p>

      {/* Summary of submitted data */}
      <div className="submission-summary">
        <h3 className="summary-heading">Submission Summary</h3>
        <dl className="summary-list">
          <div className="summary-item">
            <dt>Full Name:</dt>
            <dd>{submittedData.fullName}</dd>
          </div>
          <div className="summary-item">
            <dt>Email:</dt>
            <dd>{submittedData.email}</dd>
          </div>
          <div className="summary-item">
            <dt>Phone:</dt>
            <dd>{submittedData.phone}</dd>
          </div>
          <div className="summary-item">
            <dt>Subject:</dt>
            <dd>{submittedData.subject}</dd>
          </div>
          <div className="summary-item message-summary">
            <dt>Message:</dt>
            <dd>{submittedData.message}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="btn-secondary reset-btn"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
        Submit Another Response
      </button>
    </div>
  );
};

export default SuccessCard;
