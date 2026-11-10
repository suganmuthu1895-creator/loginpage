/**
 * Form Validation Utilities
 * 
 * Clean, pure functions to validate form fields.
 * Each function returns an error string if invalid, or an empty string '' if valid.
 */

// Email regex pattern checking standard user@domain.extension format
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone regex allowing optional country code (+), spaces, hyphens, and brackets.
// Requires 10 to 15 digits in total.
export const PHONE_REGEX = /^\+?(\d[\s-()]?){10,15}$/;

/**
 * Validates a single field based on its name and value.
 * Useful for real-time validation when the user types or leaves a field (onBlur).
 *
 * @param {string} name - Field name ('fullName', 'email', etc.)
 * @param {string} value - Current field value
 * @returns {string} Error message, or '' if valid
 */
export const validateField = (name, value) => {
  const trimmedValue = (value || '').trim();

  switch (name) {
    case 'fullName':
      if (!trimmedValue) {
        return 'Full name is required.';
      }
      if (trimmedValue.length < 2) {
        return 'Full name must be at least 2 characters.';
      }
      if (!/^[a-zA-Z\s'-]+$/.test(trimmedValue)) {
        return 'Full name can only contain letters, spaces, hyphens, and apostrophes.';
      }
      return '';

    case 'email':
      if (!trimmedValue) {
        return 'Email address is required.';
      }
      if (!EMAIL_REGEX.test(trimmedValue)) {
        return 'Please enter a valid email address (e.g., name@example.com).';
      }
      return '';

    case 'phone':
      if (!trimmedValue) {
        return 'Phone number is required.';
      }
      if (!PHONE_REGEX.test(trimmedValue)) {
        return 'Please enter a valid phone number (at least 10 digits).';
      }
      return '';

    case 'subject':
      if (!trimmedValue) {
        return 'Subject is required.';
      }
      if (trimmedValue.length < 3) {
        return 'Subject must be at least 3 characters.';
      }
      return '';

    case 'message':
      if (!trimmedValue) {
        return 'Message is required.';
      }
      if (trimmedValue.length < 10) {
        return 'Message must be at least 10 characters long.';
      }
      return '';

    default:
      return '';
  }
};

/**
 * Validates the entire form object before submission.
 *
 * @param {Object} formData - Object containing all form fields
 * @returns {Object} errors - Object containing error messages for invalid fields
 */
export const validateForm = (formData) => {
  const errors = {};
  const fields = ['fullName', 'email', 'phone', 'subject', 'message'];

  fields.forEach((field) => {
    const error = validateField(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};
