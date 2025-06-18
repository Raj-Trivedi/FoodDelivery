import React, { useRef } from 'react';
import { menu_list } from '../../../../assets/frontend_assets/assets';
import "./Explore.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Explore = ({Category,setCategory}) => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 200; // scroll left by 200px
    } else {
      current.scrollLeft += 200; // scroll right by 200px
    }
  };

  return (
    <div className='Explore-menu'>
      <h1>Discover Delicious Choices</h1>
      <p>Browse our diverse menu and discover hearty comfort foods, fresh new flavors, and your next crave-worthy favorite — all in one place.</p>
      
      <div className="Explore-slider-container">
        {/* Left arrow */}
        <button className="slider-button left" onClick={() => scroll('left')}> <FontAwesomeIcon icon={faChevronLeft} /></button>
        
        {/* Scrollable items */}
        <div className='Explore-menu-items'
        
         ref={scrollRef}>
          {menu_list.map((item, index) => (
            <div key={index}  onClick={()=> setCategory((prev)=> prev === item.menu_name ? 'All' : item.menu_name)}
            className="Explore-menu-item">
              <img className={(Category === item.menu_name)?"Active Explore-menu-item":"Explore-menu-item"} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button className="slider-button right" onClick={() => scroll('right')}> <FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      <hr/>
    </div>
    
  );
};

export default Explore;
