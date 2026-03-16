import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOY_DATA, CATEGORIES, AGE_GROUPS, PRICE_RANGES } from './data';
import { Filter, Search, Tag, Users, DollarSign } from 'lucide-react';
import './App.css';

const Products = () => {
    const [category, setCategory] = useState('All');
    const [ageGroup, setAgeGroup] = useState('All');
    const [priceRange, setPriceRange] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredToys = TOY_DATA.filter(toy => {
        const categoryMatch = category === 'All' || toy.category === category;
        const ageMatch = ageGroup === 'All' || toy.ageGroup === ageGroup;
        const selectedPriceObj = PRICE_RANGES.find(p => p.label === priceRange);
        const priceMatch = toy.price >= selectedPriceObj.min && toy.price <= selectedPriceObj.max;
        const searchMatch = toy.name.toLowerCase().includes(searchTerm.toLowerCase());

        return categoryMatch && ageMatch && priceMatch && searchMatch;
    });

    return (
        <div className="products-page">
            <div className="products-hero">
                <h1 className="section-title" style={{ color: 'white' }}>Toy Collection</h1>
                <p className="section-subtitle" style={{ color: 'white', opacity: 0.9 }}>Browse our magical shelves from home!</p>
            </div>

            <div className="container">
                <div className="products-layout">
                    {/* Sidebar Filters */}
                    <aside className="filters-sidebar">
                        <div className="filter-group">
                            <h3><Search size={20} /> Search</h3>
                            <input
                                type="text"
                                placeholder="Find a toy..."
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="filter-group">
                            <h3><Tag size={20} /> Category</h3>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>

                        <div className="filter-group">
                            <h3><Users size={20} /> Age Group</h3>
                            <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
                                {AGE_GROUPS.map(age => <option key={age} value={age}>{age}</option>)}
                            </select>
                        </div>

                        <div className="filter-group">
                            <h3><DollarSign size={20} /> Price Range</h3>
                            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                                {PRICE_RANGES.map(range => <option key={range.label} value={range.label}>{range.label}</option>)}
                            </select>
                        </div>

                        <button className="btn btn-secondary" style={{ width: '100%' }} onClick={() => {
                            setCategory('All');
                            setAgeGroup('All');
                            setPriceRange('All');
                            setSearchTerm('');
                        }}>Reset Filters</button>
                    </aside>

                    {/* Product Grid */}
                    <main className="products-main">
                        <div className="results-count">
                            Showing {filteredToys.length} magical toys
                        </div>

                        <div className="products-grid">
                            {filteredToys.map(toy => (
                                <Link to={`/product/${toy.id}`} key={toy.id} className="toy-card product-card">
                                    <div className="toy-image-wrapper">
                                        <div className="toy-badge">{toy.category}</div>
                                        <img src={toy.image} alt={toy.name} className="toy-image" />
                                    </div>
                                    <div className="toy-info">
                                        <h3 className="toy-title">{toy.name}</h3>
                                        <p className="toy-description">{toy.description}</p>
                                        <div className="product-meta">
                                            <span className="age-tag"><Users size={14} /> {toy.ageGroup}</span>
                                        </div>
                                        <div className="toy-price">${toy.price.toFixed(2)}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredToys.length === 0 && (
                            <div className="no-results">
                                <h2>Oops! No toys found.</h2>
                                <p>Try changing your filters to find something else magical!</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products;
