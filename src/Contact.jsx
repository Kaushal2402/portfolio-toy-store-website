import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import './App.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const storeTimings = [
        { days: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
        { days: 'Saturday', hours: '10:00 AM - 9:00 PM' },
        { days: 'Sunday', hours: '11:00 AM - 6:00 PM' }
    ];

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1 className="section-title" style={{ color: 'white' }}>Say Hello!</h1>
                    <p className="section-subtitle" style={{ color: 'white', opacity: 0.9 }}>We'd love to hear from you or see you in store!</p>
                </div>
            </section>

            <div className="container section-padding">
                <div className="contact-grid">
                    {/* Contact Form Section */}
                    <div className="contact-form-container">
                        <div className="form-card">
                            <h2>Send a Magical Message</h2>
                            <p>Have a question about a toy or an event? Send us a note!</p>

                            {submitted ? (
                                <div className="submission-success">
                                    <CheckCircle2 size={48} color="var(--color-green)" />
                                    <h3>Poof! Message Sent.</h3>
                                    <p>Our toy experts will get back to you faster than a racing car!</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="e.g. Charlie Bucket"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="hello@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Message</label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            placeholder="What's on your mind?"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary submit-btn">
                                        <Send size={20} /> Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Store Info Section */}
                    <div className="contact-info-container">
                        <div className="info-section">
                            <h3><MapPin size={24} color="var(--color-red)" /> Visit the Store</h3>
                            <p>123 Magic Lane, Toy City, TC 90210</p>
                        </div>

                        <div className="info-section">
                            <h3><Phone size={24} color="var(--color-blue)" /> Call Us</h3>
                            <p>(555) 123-4567</p>
                        </div>

                        <div className="info-section">
                            <h3><Clock size={24} color="var(--color-yellow-dark)" /> Store Timings</h3>
                            <ul className="timings-list">
                                {storeTimings.map((time, idx) => (
                                    <li key={idx}>
                                        <span className="days">{time.days}</span>
                                        <span className="hours">{time.hours}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="map-placeholder">
                            {/* Mock Google Map - Using a styled iframe for a real-world feel */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1025.297341851214!2d-122.0840508!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbba59ecae58d%3A0xc39f83ea3ee7cadc!2sGoogle%20Plex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0, borderRadius: '20px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
