import React, { useState } from 'react';
import './FoodItem.css';

const FoodItem = ({ id, image, name, description, price }) => {
  const [rating, setRating] = useState(0);

  // Handle star click
  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="food-item">
      <div className='Food-img'>
        <img src={image} alt={name} />
      </div>
      <div className='Description'>
        <div className="name-rating">
          <span className="name">{name}</span>
          <span className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={value <= rating ? "star filled" : "star"}
                onClick={() => handleStarClick(value)}
              >
                ★
              </span>
            ))}
          </span>
        </div>
        <p>{description}</p>
        <span className="price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FoodItem;
