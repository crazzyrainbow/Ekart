// ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Import your CSS file for styling

const ProductCard = ({ title, price, image, description }) => {
  const handleBuyNow = () => {
    // Implement your "Buy Now" logic here
    console.log(`Buying ${title} now!`);
  };

  const handleAddToCart = () => {
    // Implement your "Add to Cart" logic here
    console.log(`Adding ${title} to cart!`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">Price: {price}</p>
        <p className="product-description">{description}</p>
        <div className="product-buttons">
          <button className="buy-now-button" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
