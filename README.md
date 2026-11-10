# Modern React Form Submission Page

A responsive and accessible Contact Form submission page built with React 18, Vite, and modern CSS.

## 🚀 How to Run Locally

1. Open your terminal in this directory:
   ```bash
   cd "c:\Users\Hp\Downloads\form submission"
   ```

2. Start the local Vite development server:
   ```bash
   npm run dev
   ```

3. Open the browser at `http://localhost:3000` (or the URL shown in your terminal).

---

## 📁 Project Structure

```
├── index.html                 # Main HTML template with Plus Jakarta Sans font
├── package.json               # Dependencies and scripts (React, Vite)
├── vite.config.js             # Vite configuration
└── src/
    ├── main.jsx               # React DOM entry point
    ├── App.jsx                # Main landing page layout (split hero + form)
    ├── App.css                # Layout styles, responsive grid, ambient glow
    ├── index.css              # Global CSS reset, variables, typography
    ├── utils/
    │   └── validation.js      # Pure validation logic (Regex, required checks)
    └── components/
        ├── ContactForm.jsx    # Form state management (useState, submit flow)
        ├── ContactForm.css    # Form card, inputs, focus states, animations
        ├── InputField.jsx     # Reusable text/email/tel input component
        ├── TextAreaField.jsx  # Reusable textarea with live character counter
        ├── SuccessCard.jsx    # Success view with checkmark & data summary
        └── SuccessCard.css    # Animated checkmark and summary card styles
```

---

## ✨ Features Included
- **Controlled Components**: Every input is tied to React state via `useState`.
- **Comprehensive Validation**:
  - Required checks on all fields (Full Name, Email, Phone, Subject, Message).
  - Email format validation using RFC-compliant regex.
  - Phone validation accepting international/local 10–15 digit formats.
  - Character counter on the message area.
- **Two-phase Validation UX**:
  - `onBlur`: Validates a field as soon as the user finishes typing and leaves the field.
  - `onChange`: Clears or updates errors in real-time once a field has been touched.
  - `onSubmit`: Validates all fields simultaneously and automatically focuses the first invalid field.
- **Accessible (A11y)**: Uses `<label htmlFor>`, `aria-invalid`, `aria-describedby`, and `role="alert"`.
- **Fully Responsive**: Adapts seamlessly from mobile screens (<640px) to wide desktop displays (>1200px).
