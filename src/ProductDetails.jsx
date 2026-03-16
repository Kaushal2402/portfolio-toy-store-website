import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOY_DATA } from './data';
import { ArrowLeft, Users, Tag, DollarSign, MapPin } from 'lucide-react';
import './App.css';

const ProductDetails = () => {
    const { id } = useParams();
    const toy = TOY_DATA.find(t => t.id === parseInt(id));

    if (!toy) {
        return (
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
                <h2>Oops! Toy not found.</h2>
                <Link to="/products" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Back to Gallery</Link>
            </div>
        );
    }

    return (
        <div className="product-details-page">
            <div className="container section-padding">
                <Link to="/products" className="back-link">
                    <ArrowLeft size={20} /> Back to Collection
                </Link>

                <div className="details-card">
                    <div className="details-image-container">
                        <img src={toy.image} alt={toy.name} className="details-image" />
                        <div className="details-badge">{toy.category}</div>
                    </div>

                    <div className="details-content">
                        <h1 className="details-title">{toy.name}</h1>
                        <div className="details-meta">
                            <span className="details-age"><Users size={18} /> {toy.ageGroup}</span>
                            <span className="details-category"><Tag size={18} /> {toy.category}</span>
                        </div>

                        <div className="details-price">${toy.price.toFixed(2)}</div>

                        <div className="details-divider"></div>

                        <div className="details-description-section">
                            <h3>About this Toy</h3>
                            <p className="details-description">{toy.description}</p>
                        </div>

                        <div className="details-cta-section">
                            <div className="store-note">
                                <MapPin size={20} color="var(--color-red)" />
                                <span>Available only at our physical store!</span>
                            </div>
                            <button
                                className="btn btn-primary details-buy-btn"
                                onClick={() => {
                                    const visitSection = document.getElementById('visit');
                                    if (visitSection) {
                                        visitSection.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        window.location.href = '/#visit';
                                    }
                                }}
                            >
                                Visit Store to Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
