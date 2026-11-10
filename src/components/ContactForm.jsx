import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import SuccessCard from './SuccessCard';
import { validateField, validateForm } from '../utils/validation';
import './ContactForm.css';

/**
 * Initial empty state for form values
 */
const INITIAL_FORM_DATA = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  // 1. State for form inputs (Controlled Components)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // 2. State for validation errors (maps field name -> error message)
  const [errors, setErrors] = useState({});

  // 3. State to track which fields the user has interacted with (touched)
  const [touched, setTouched] = useState({});

  // 4. State for submission loading indicator
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 5. State for submitted data to show in Success Card
  const [submittedData, setSubmittedData] = useState(null);

  /**
   * Handle text changes across all form inputs dynamically.
   * Uses [name]: value computed property name.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form input value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // If this field previously had an error and is touched,
    // re-validate it in real-time so the user gets immediate positive feedback
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  /**
   * Handle input blur (when the user leaves an input field).
   * Validates the field immediately so errors appear naturally.
   */
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Mark field as visited/touched
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    // Validate this specific field
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  /**
   * Handle Form Submission
   */
  const handleSubmit = (e) => {
    // Prevent the default browser behavior (page refresh)
    e.preventDefault();

    // Mark all fields as touched so all errors display if user submitted empty
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    // If errors object has any keys, stop submission
    const hasErrors = Object.keys(formErrors).length > 0;
    if (hasErrors) {
      // Find the first field with an error and focus it for better UX
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }

    // Begin submission simulation (simulates API request to backend)
    setIsSubmitting(true);

    setTimeout(() => {
      // Simulate successful network response
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      setTouched({});
    }, 1200);
  };

  /**
   * Reset the form to allow sending another message
   */
  const handleReset = () => {
    setSubmittedData(null);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setTouched({});
  };

  // If successfully submitted, render the Success View
  if (submittedData) {
    return <SuccessCard submittedData={submittedData} onReset={handleReset} />;
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <span className="badge">Get in Touch</span>
        <h2 className="form-title">Send us a Message</h2>
        <p className="form-description">
          Have questions or want to collaborate? Fill out the details below and we'll
          respond within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        {/* Name & Email Row (Responsive 2-column grid on desktop) */}
        <div className="form-row">
          <InputField
            id="fullName"
            name="fullName"
            type="text"
            label="Full Name"
            placeholder="Jane Doe"
            required
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullName ? errors.fullName : ''}
            autoComplete="name"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />

          <InputField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="jane@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : ''}
            autoComplete="email"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
          />
        </div>

        {/* Phone Number & Subject Row */}
        <div className="form-row">
          <InputField
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            required
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone ? errors.phone : ''}
            autoComplete="tel"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />

          <InputField
            id="subject"
            name="subject"
            type="text"
            label="Subject"
            placeholder="Project inquiry, consultation..."
            required
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.subject ? errors.subject : ''}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="20" y2="15" />
                <line x1="10" y1="3" x2="8" y2="21" />
                <line x1="16" y1="3" x2="14" y2="21" />
              </svg>
            }
          />
        </div>

        {/* Message Field */}
        <TextAreaField
          id="message"
          name="message"
          label="Your Message"
          placeholder="Tell us about your project or what you would like to discuss..."
          required
          rows={5}
          maxLength={800}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.message ? errors.message : ''}
        />

        {/* Action Button */}
        <div className="form-actions">
          <button
            type="submit"
            className="btn-primary submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner" aria-hidden="true"></span>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Submit Message</span>
                <svg
                  className="send-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
