import React from 'react';

/**
 * Reusable InputField Component
 * 
 * Demonstrates:
 * - Controlled input handling via `value` and `onChange`
 * - Accessibility (a11y) with `htmlFor`, `aria-invalid`, and `aria-describedby`
 * - Conditional styling based on validation errors
 */
const InputField = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  autoComplete,
  icon
}) => {
  const hasError = Boolean(error);

  return (
    <div className={`form-group ${hasError ? 'has-error' : ''}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="required-star" aria-hidden="true">*</span>}
      </label>

      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className={`form-input ${icon ? 'has-icon' : ''}`}
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

export default InputField;
