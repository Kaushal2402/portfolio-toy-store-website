import React from 'react';
import { Heart, Star, Sparkles, History, Target, Users } from 'lucide-react';
import './App.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="section-title" style={{ color: 'white' }}>Our Magical Story</h1>
                    <p className="section-subtitle" style={{ color: 'white', opacity: 0.9 }}>Bringing joy to children for over two decades!</p>
                </div>
            </section>

            <div className="container section-padding">
                <div className="about-grid">
                    <div className="about-image-stack">
                        <div className="main-about-image">
                            <img src="/images/store_front.png" alt="Toyland Adventures Storefront" />
                        </div>
                        <div className="secondary-about-image">
                            <img src="/images/store_interior.png" alt="Toyland Adventures Interior" />
                        </div>
                    </div>

                    <div className="about-text-content">
                        <div className="about-badge">
                            <History size={18} /> Established 1999
                        </div>
                        <h2>Once Upon a Time...</h2>
                        <p>
                            Toyland Adventures started with a simple dream: to create a place where imagination knows no bounds.
                            Founded in 1999 by a family that believed play is the most important part of childhood,
                            we've grown from a small corner shop to the happiest destination in town.
                        </p>
                        <p>
                            For over 25 years, we have been more than just a toy store. We are a community of dreamers,
                            builders, and explorers. Every toy on our shelves is hand-picked for its ability to inspire,
                            educate, and bring a genuine smile to a child's face.
                        </p>

                        <div className="mission-box">
                            <h3><Target size={24} color="var(--color-red)" /> Our Mission</h3>
                            <p>
                                To spark creativity and wonder in every child by providing high-quality,
                                meaningful play experiences that create lasting memories for families.
                            </p>
                        </div>
                    </div>
                </div>

                <section className="highlights-grid">
                    <div className="highlight-card">
                        <div className="highlight-icon"><Star size={32} /></div>
                        <h3>Premium Quality</h3>
                        <p>We only stock toys that meet the highest standards of safety and durability.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon"><Heart size={32} /></div>
                        <h3>Community First</h3>
                        <p>Proudly serving our neighborhood and supporting local kids' events since day one.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon"><Sparkles size={32} /></div>
                        <h3>Magic Guaranteed</h3>
                        <p>If it doesn't make them go "Wow!", it doesn't make it to our shelves.</p>
                    </div>
                </section>

                <section className="visit-cta-about">
                    <div className="cta-about-content">
                        <h2>Experience the Magic in Person!</h2>
                        <p>Nothing beats the feeling of exploring our toys first-hand. Come visit us at Toy City today!</p>
                        <button className="btn btn-primary" onClick={() => {
                            window.location.href = '/#visit';
                        }}>📌 Get Directions</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
