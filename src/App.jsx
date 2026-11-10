import React from 'react';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Decorative Blobs */}
      <div className="bg-glow bg-glow-1" aria-hidden="true" />
      <div className="bg-glow bg-glow-2" aria-hidden="true" />

      {/* Header / Navbar */}
      <header className="app-header">
        <div className="nav-container">
          <div className="logo-badge">
            <span className="logo-icon">✨</span>
            <span className="logo-text">milo</span>
          </div>
          <div className="nav-tag">
            <span>React + CSS Mastery</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-grid">
          {/* Left Column: Context / Contact Highlights */}
          <aside className="info-column">
            <div className="info-badge">Reach Out</div>
            <h1 className="info-headline">Let's start a conversation.</h1>
            <p className="info-subtext">
              Whether you're exploring a new project, looking for consultation, or just want to say hi,
              we’re always happy to connect.
            </p>

            <div className="contact-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="highlight-title">Direct Email</h4>
                  <p className="highlight-detail">support@formcraft.dev</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="highlight-title">Phone Support</h4>
                  <p className="highlight-detail">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="highlight-title">Fast Response</h4>
                  <p className="highlight-detail">Guaranteed reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Beginner Quick Guide Box */}
            <div className="feature-tip-box">
              <span className="tip-badge">React Concept</span>
              <p className="tip-text">
                Every field in this form is a <strong>controlled component</strong> linked to React state. Validation triggers automatically on blur and on submit.
              </p>
            </div>
          </aside>

          {/* Right Column: The Contact Form */}
          <section className="form-column">
            <ContactForm />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} FormCraft. Built with React & Pure CSS for beginners.</p>
      </footer>
    </div>
  );
}

export default App;
