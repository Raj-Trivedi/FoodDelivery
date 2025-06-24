import React, { useState } from 'react';
import './FoodItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext.jsx';
import add_icon_white from '../../../../assets/frontend_assets/add_icon_white.png';
import add_icon_green from '../../../../assets/frontend_assets/add_icon_green.png';
import remove_icon_red from '../../../../assets/frontend_assets/remove_icon_red.png';
import basket_icon from '../../../../assets/frontend_assets/basket_icon.png';

const FoodItem = ({ id, image, name, description, price }) => {
  const [rating, setRating] = useState(0);
  // const [ItemCount, setItemCount] = useState(0);
  const { addToCart, removeFromCart,CartItems } = useContext(StoreContext);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="food-item">
      <div className="Food-img">
        <img className="img" src={image} alt={name} />

        <div className="CountDiv">
          {!CartItems[id] ? (
            <p></p>

          ) : (
            <div className="btnCountContainer">
              <img
                className="btnCount"
                onClick={() => addToCart(id)}
                src={add_icon_green}
                alt="Add more"
              />
              <p>{CartItems[id]}</p>
              <img
                className="btnCount"
                onClick={() => removeFromCart(id)}
                src={remove_icon_red}
                alt="Remove"
              />
            </div>
          )}
        </div>
      </div>

      <div className="Description">
        <div className="name-rating">
          <span className="name">{name}</span>
          <span className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={value <= rating ? 'star filled' : 'star'}
                onClick={() => handleStarClick(value)}
              >
                ★
              </span>
            ))}
          </span>
        </div>
        <p>{description}</p>
        <div className="price-area">
          <span className="price">₹{price.toFixed(2)}</span>
          <FontAwesomeIcon 
            className='btncart' 
            onClick={() => addToCart(id)} 
            icon={faCartShopping}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
