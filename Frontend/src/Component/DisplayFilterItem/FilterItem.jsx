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

                        <div className="filterItem-IMG" onClick={() => navigate(`/product/${item._id}`)} style={{cursor:'pointer'}}>
                            <div className="Item-overlay">
                                <FontAwesomeIcon
                                className="btncart1"
                                onClick={() => {
                                  if (!CartItems || !CartItems[item._id]) {
                                    addToCart(item._id);
                                    toast.success('Item added to cart', { position: 'bottom-left', autoClose: 1200 });
                                  } else {
                                    addToCart(item._id);
                                  }
                                }}
                                icon={faCartShopping}
                                />
                                {/* <FontAwesomeIcon
                                className="btncart1"
                                onClick={toggleLike(item._id)}
                                icon={liked[item._id]===1 ? faSolidHeart : faRegularHeart}
                                /> */}
                            </div>
                             <img src={item.image} alt={item.name} />
                         </div>
                        <div className="filterItem-des">
                            <h3 onClick={() => navigate(`/product/${item._id}`)} style={{cursor:'pointer'}}>{item.name}</h3>
                            <p>Price:  <span>₹{item.price.toFixed(2)}</span>  </p>
                           
                          
                            
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


