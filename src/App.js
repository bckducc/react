import React, { useRef, useEffect, useState } from 'react';
import './App.css';

// Navbar component
const Navbar = ({ viewMode, onToggleView }) => (
  <nav>
    <div className="navbar-inner">
      {/* Logo */}
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" />
      </div>

      {/* Preview Icons */}
      <div className="preview-icons">
        {/* Desktop icon */}
        <svg
          onClick={() => onToggleView('desktop')}
          className={viewMode === 'desktop' ? 'icon-active' : ''}
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9.75 17h4.5M4.5 21h15a1.5 1.5 0 001.5-1.5V5.25A1.5 1.5 0 0019.5 3.75H4.5A1.5 1.5 0 003 5.25V19.5A1.5 1.5 0 004.5 21z" />
        </svg>

        {/* iPhone 16 Pro Max icon */}
        <svg
          onClick={() => onToggleView('mobile')}
          className={viewMode === 'mobile' ? 'icon-active' : ''}
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M7.5 2.25h9a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 015.25 19.5v-15A2.25 2.25 0 017.5 2.25z" />
        </svg>
      </div>

      {/* Actions */}
      <div className="actions">
        <a href="#" className="action-link">Đọc thêm</a>
        <button className="btn-primary">Chỉnh sửa trang web này</button>
      </div>
    </div>
  </nav>
);

// Hero & About with fade-in animation
const HeroAbout = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      requestAnimationFrame(() => {
        el.classList.add('animate');
      });
    }
  }, []);

  return (
    <section ref={ref} className="hero-about">
      <div className="hero-about-left">
        <h1 className="hero-title">Hello, I’m Anh Duc</h1>
        <p className="hero-subtitle">
          Passionate frontend developer crafting modern web experiences with React.
        </p>
        <img 
          src={`${process.env.PUBLIC_URL}/logo.jpg`} 
          alt="My Avatar" 
          className="hero-avatar" 
          onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/default-avatar.jpg`; }}
        />
        <button
          className="btn--primary"
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Projects
        </button>
      </div>
      <div className="hero-about-right">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          Tôi là một frontend developer với hơn 3 năm kinh nghiệm xây dựng các ứng dụng web nhanh, responsive và dễ dùng.
        </p>
        <section id="projects" className="section alt">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="card">
                <h3>Project {i}</h3>
                <p>Short description of project {i}, tech stack: React, CSS, APIs.</p>
                <a href="https://github.com/bckducc/react/tree/master" className="btn-outline">
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

// Contact section
const Contact = () => (
  <section id="contact" className="section">
    <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="4" placeholder="Your Message" required />
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    &copy; {new Date().getFullYear()} Buscucker Đức. All rights reserved.
  </footer>
);

// Main App
export default function App() {
  const [viewMode, setViewMode] = useState('desktop');

  return (
    <div className="preview-wrapper">
      <Navbar viewMode={viewMode} onToggleView={setViewMode} />
      <div className={`app-container ${viewMode}`}>
        <main>
          <HeroAbout />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}