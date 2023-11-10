// HomePage2.jsx
import React, { useState } from 'react';
import './HomePage2.css';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import productImage1 from '../Product 1.jpg';
import Footer from './Footer';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle the search logic here, e.g., filter and display matching products
    // For this example, we'll just display an alert with the search query.
    alert(`Searching for: ${searchQuery}`);
  };
  return (
    <div className="container">
      <div className="content">
      <div className="header">
          <h1>Welcome to E-kart</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <p>Explore our amazing products and services.</p>
        <div className="products">
        <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProductCard
            title="Product 1"
            price="$50"
            image={productImage1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          {/* Add more ProductCard components here */}
        </div>
      </div>
      <nav className="nav">
        <Link to="/my-account" className="link">
          My Account
        </Link>
        <Link to="/my-address" className="link">
          My Address
        </Link>
      </nav>
      <Footer />
    </div>
  );
};

export default HomePage;
