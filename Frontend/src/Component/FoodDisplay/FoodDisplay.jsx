import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({ category, onAddToCart, onRemoveFromCart }) => {
  const { food_list } = useContext(StoreContext);

  const selectedIndices = [1, 6, 12, 18, 22, 27, 33, 38, 41, 49];
  const selectedItems = selectedIndices.map(index => food_list[index])

  // Select 10 random items if category is 'All'
  function getRandomItems(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const filteredItems = food_list.filter(item => item.category === category);
  const itemsToRender = category === "All"
    ? getRandomItems(food_list, 10)
    : filteredItems;

  console.log("Items to render:", itemsToRender);
  // console.log("Full food_list:", food_list);
  console.log("Current category:", category);



  return (
    <div className="food-display">
      <h1>Top Dishes Near You</h1>
      <div className="food-items">
        {itemsToRender.filter(Boolean).map((item, index) => (
          <FoodItem
            key={item._id || index}
            id={item._id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
