import React from 'react'
import './FilterItem.css'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';




const FilterItem = ({category,minPrice,maxPrice,sortBy}) => {
    // const [liked, setLiked] = useState(false);


 
    const { food_list ,addToCart,liked,toggleLike,searchItem, CartItems } = useContext(StoreContext);
    const SortItem = (food_list, sortBy) => {
    if (sortBy === 'default') return food_list;
    if (sortBy === 'LH'){
        return food_list.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'HL'){
        return food_list.sort((a, b) => b.price - a.price);
    }
   
    return food_list; 
  };
    const Updatedlist =SortItem(food_list, sortBy);

    const filteredFoodList = Updatedlist.filter(item => {
        const isSearchMatch = searchItem ? item.name.toLowerCase().includes(searchItem.toLowerCase()) : true;
        if (!isSearchMatch) return false;   
        
      
        

        
        
        const isCategoryMatch = Object.keys(category).length === 0 || category[item.category] === true; 
        const isPriceMatch = item.price >= minPrice && item.price <= maxPrice;
        return isCategoryMatch && isPriceMatch;

    });

    console.log("Filtered Food List:", filteredFoodList);

    const navigate = useNavigate();

  return (
    <div className="FilterItem-container">
        <div className="FilterItem-header">
            
        </div>
        <div>
            <div className="FilterItem-items">
                {filteredFoodList.map((item,index) => (
                    <div key={index} className="FilterItem-item" >
                        <div className="filterItem-IMG" style={{cursor:'pointer', position:'relative'}}>
                            <img src={item.image && !item.image.startsWith('http') ? `http://localhost:5000/upload/${item.image}` : item.image} alt={item.name} />
                            <div className="Item-overlay">
                              <button className="card-btn add-btn" onClick={e => {e.stopPropagation(); if (!CartItems || !CartItems[item._id]) { addToCart(item._id); toast.success('Item added to cart', { position: 'bottom-left', autoClose: 1200 }); } else { addToCart(item._id); }}}>Add to Cart</button>
                              <button className="card-btn view-btn" onClick={e => {e.stopPropagation(); navigate(`/product/${item._id}`)}}>View Details</button>
                            </div>
                        </div>
                        <div className="filterItem-des">
                            <div className="card-title-row">
                              <h3 onClick={() => navigate(`/product/${item._id}`)}>{item.name}</h3>
                              <span className="card-price">₹{item.price.toFixed(2)}</span>
                            </div>
                            <div className="card-desc">{item.longDescription?.slice(0, 60) || item.description}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        <ToastContainer />
    </div>
  )
}

export default FilterItem;


