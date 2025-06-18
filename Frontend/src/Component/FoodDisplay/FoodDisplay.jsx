import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Define the specific indices you want
  const selectedIndices = [1, 6, 12, 18, 22, 27, 33, 38, 41, 49];

  // Filter food_list to only those items
  const selectedItems = selectedIndices.map(index => food_list[index]).filter(Boolean);

  return (
    <div className="food-display">
      <h1>Top Dishes Near You</h1>
      <div className="food-items">
        {selectedItems.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
