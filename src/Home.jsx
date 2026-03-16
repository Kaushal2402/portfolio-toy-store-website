import React, { useState, useEffect } from 'react';
import {
    Gamepad2,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Twitter,
    TrainFront,
    Plane,
    Rocket,
    Puzzle,
    Gift,
    BookOpen,
    Baby,
    CarFront
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOY_DATA } from './data';
import './App.css';

const Home = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'Educational Toys', icon: <BookOpen size={40} /> },
        { name: 'Action Figures', icon: <Baby size={40} /> },
        { name: 'Dolls', icon: <Gift size={40} /> },
        { name: 'Board Games', icon: <Gamepad2 size={40} /> },
        { name: 'RC Toys', icon: <CarFront size={40} /> },
        { name: 'Puzzles', icon: <Puzzle size={40} /> },
    ];

    const featuredToys = TOY_DATA.slice(0, 6);

    const trainX = -15 + (scrollPos * 0.15);

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="scroll-train-container" style={{ transform: `translateX(${trainX}vw)` }}>
                    <div className="immersive-train">
                        <div className="train-part engine">
                            <TrainFront size={120} color="var(--color-red)" />
                            <div className="train-smoke-large"></div>
                            <div className="train-smoke-large delayed"></div>
                            <div className="engine-face">😊</div>
                            <div className="wheel wheel-1" style={{ transform: `rotate(${scrollPos * 2}deg)` }}></div>
                            <div className="wheel wheel-2" style={{ transform: `rotate(${scrollPos * 2}deg)` }}></div>
                        </div>
                        <div className="train-connector"></div>
                        <div className="train-part bogie">
                            <div className="bogie-toy">
                                <Rocket size={60} color="var(--color-blue)" className="toy-floating" />
                            </div>
                            <div className="bogie-body">1</div>
                            <div className="wheel wheel-1" style={{ transform: `rotate(${scrollPos * 2}deg)` }}></div>
                            <div className="wheel wheel-2" style={{ transform: `rotate(${scrollPos * 2}deg)` }}></div>
                        </div>
                        <div className="train-connector"></div>
                        <div className="train-part bogie">
                            <div className="bogie-toy">
                                <Puzzle size={60} color="var(--color-green)" className="toy-rotating" />
                            </div>
                            <div className="bogie-body">2</div>
                            <div className="wheel wheel-1" style={{ transform: `rotate(${scrollPos * 2}deg)` }}></div>
                            <div className="wheel wheel-2" style={{ transform: `rotate(${scrollPos * 2}deg)` }}></div>
                        </div>
                    </div>
                    <div className="train-tracks">
                        {[...Array(20)].map((_, i) => <div key={i} className="track-sleeper"></div>)}
                    </div>
                </div>

                <div className="container hero-content">
                    <h1 className="hero-title">Welcome to Toyland Adventures</h1>
                    <p className="hero-subtitle">The happiest place for toys!</p>
                    <Link to="/products" className="btn btn-secondary">Explore Toys</Link>
                    <div className="hero-image-container">
                        <img src="/images/hero_banner_1773653985423.png" alt="Toy Store Display" className="hero-image" />
                    </div>
                </div>

                <div className="animated-plane">
                    <Plane size={60} color="var(--color-white)" />
                    <div className="plane-trail"></div>
                </div>

                <div className="custom-shape-divider-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* Categories */}
            <section id="categories" className="categories">
                <div className="container">
                    <h2 className="section-title">Play Your Way</h2>
                    <p className="section-subtitle">Discover fun for every age and imagination!</p>
                    <div className="categories-grid">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="category-card">
                                <div className="category-icon">{cat.icon}</div>
                                <h3 className="category-name">{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Toys */}
            <section id="featured" className="featured">
                <div className="decor-circle"></div>
                <div className="container">
                    <h2 className="section-title">Toy Spotlight 🌟</h2>
                    <p className="section-subtitle">Our most popular and loved toys right now!</p>
                    <div className="featured-grid">
                        {featuredToys.map((toy) => (
                            <Link to={`/product/${toy.id}`} key={toy.id} className="toy-card">
                                <div className="toy-image-wrapper">
                                    <div className="toy-badge">{toy.category}</div>
                                    <img src={toy.image} alt={toy.name} className="toy-image" />
                                </div>
                                <div className="toy-info">
                                    <h3 className="toy-title">{toy.name}</h3>
                                    <div className="toy-price">${toy.price.toFixed(2)}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <h2 className="section-title">Our Story 🎈</h2>
                        <p className="about-text">
                            Since 1999, Toyland Adventures has been the neighborhood's favorite destination for smiles and giggles.
                            We believe that play is the greatest teacher, bringing out creativity and joy in every child.
                            Our shelves are stocked with hand-picked, magical toys that inspire, educate, and entertain!
                        </p>
                    </div>
                </div>
            </section>

            {/* Visit Us */}
            <section id="visit" className="visit">
                <div className="visit-background"></div>
                <div className="container visit-content">
                    <h2 className="visit-title">Come Play With Us!</h2>
                    <p className="visit-text">
                        While it's fun to look online, the real magic happens in-store.
                        Come visit Toyland Adventures to test, feel, and explore thousands of toys!
                        We have dedicated play zones waiting just for you.
                    </p>
                    <button className="btn btn-primary" onClick={() => alert('Get Directions to Toyland Adventures!')}>
                        📌 Get Directions
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
