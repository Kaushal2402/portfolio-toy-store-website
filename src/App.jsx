import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { Gamepad2, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import About from './About';
import Contact from './Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="logo">
            <Gamepad2 size={36} color="var(--color-red)" />
            <div>Toyland <span>Adventures</span></div>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">All Toys</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', marginTop: '-0.5rem' }}>View Gallery</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="logo" style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                  <Gamepad2 size={36} color="var(--color-yellow)" />
                  <div style={{ color: 'var(--color-white)' }}>Toyland <span style={{ color: 'var(--color-yellow)' }}>Adventures</span></div>
                </div>
                <p style={{ opacity: 0.8, lineHeight: 1.8 }}>Sparking joy and creativity through the best toys in town. We can't wait to see you smile!</p>
              </div>

              <div className="footer-col">
                <h3>Visit Us</h3>
                <ul className="footer-contact">
                  <li><MapPin size={20} color="var(--color-yellow)" /> 123 Magic Lane, Toy City, TC 90210</li>
                  <li><Phone size={20} color="var(--color-yellow)" /> (555) 123-4567</li>
                  <li><Mail size={20} color="var(--color-yellow)" /> hello@toylandadventures.com</li>
                </ul>
              </div>

              <div className="footer-col">
                <h3>Follow the Fun</h3>
                <div className="social-links">
                  <div className="social-icon"><Instagram size={24} /></div>
                  <div className="social-icon"><Facebook size={24} /></div>
                  <div className="social-icon"><Twitter size={24} /></div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Toyland Adventures. All lefts reserved. (Because we like to be different!)</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
