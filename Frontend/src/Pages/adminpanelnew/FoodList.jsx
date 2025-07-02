import React, { useEffect, useState } from 'react';
import './AdminPanelNew.css';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/food/');
        const data = await res.json();
        if (data.success) {
          setFoods(data.data);
        }
      } catch (err) {
        // handle error
      }
      setLoading(false);
    };
    fetchFoods();
  }, []);

  return (
    <div className="food-list">
      <h2>Food List</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {foods.map(food => (
            <li key={food._id} className="food-item">
              <img src={food.image && !food.image.startsWith('http') ? `http://localhost:5000/upload/${food.image}` : food.image} alt={food.name} width={60} />
              <div>
                <strong>{food.name}</strong> - {food.category}<br />
                {food.description}<br />
                <span>₹{food.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList; 