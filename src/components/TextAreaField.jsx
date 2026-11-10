import React from 'react';

/**
 * Reusable TextAreaField Component
 * 
 * Demonstrates:
 * - Multiline text input handling
 * - Dynamic character counting
 * - Error display and accessible attributes
 */
const TextAreaField = ({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  rows = 4,
  maxLength = 1000
}) => {
  const hasError = Boolean(error);
  const characterCount = (value || '').length;

  return (
    <div className={`form-group ${hasError ? 'has-error' : ''}`}>
      <div className="label-row">
        <label htmlFor={id} className="form-label">
          {label} {required && <span className="required-star" aria-hidden="true">*</span>}
        </label>
        <span className="char-counter" aria-live="polite">
          {characterCount}/{maxLength}
        </span>
      </div>

      <div className="input-wrapper">
        <textarea
          id={id}
          name={name}
          rows={rows}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className="form-textarea"
        />
      </div>

      {hasError && (
        <p id={`${id}-error`} className="error-message" role="alert">
          <svg
            className="error-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
