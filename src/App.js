// import React from 'react';
// import './App.css';
// import ProfileCard from './components/ProfileCard';

// function App() {
//   return (
//     <div className="App">
//       {/* ... */}
//       <section className="features">
//         <ProfileCard name="Nguyễn Văn A" title="Frontend Dev" />
//         <ProfileCard name="Trần Thị B" title="UI/UX Designer" />
//       </section>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import './App.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="brand">
          <div className="brand-badge">BD</div>
          <span>Buscucker Đức</span>
        </a>
        <nav className={`nav-menu ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          <span className="hamburger" />
        </button>
      </div>
    </header>
  );
}

// Thay thế component Hero cũ bằng đoạn này
const Hero = () => (
  <section id="hero" className="hero">
    {/* Decorative blobs */}
    <div className="blob blob--one"></div>
    <div className="blob blob--two"></div>

    <div className="hero-content">
      <h1 className="hero-title">Hello, I’m Anh Đức</h1>
      <p className="hero-subtitle">
        Passionate frontend developer crafting modern web experiences with React.
      </p>
      <a href="#projects" className="btn btn--primary">
        Explore Projects
      </a>
    </div>
  </section>
);

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        Tôi là một frontend developer với hơn 3 năm kinh nghiệm xây dựng các ứng dụng web nhanh, responsive và dễ dùng.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section alt">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {[1,2,3,4].map(i => (
          <div key={i} className="card">
            <h3>Project {i}</h3>
            <p>Short description of project {i}, tech stack: React, CSS, APIs.</p>
            <a href="#" className="btn-outline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required />
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Buscucker Đức. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
