import React from 'react';
import './AboutUs.css';
import about_us_girl from '../../../../assets/frontend_assets/img/aboutus/illugirl.jpg';
import food_icon1 from '../../../../assets/frontend_assets/img/vada1.jpeg';
import food_icon2 from '../../../../assets/frontend_assets/img/panipuri.jpeg';
import food_icon3 from '../../../../assets/frontend_assets/img/biryani1.jpeg';
import food_icon4 from '../../../../assets/frontend_assets/img/masaladosa.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faTruckFast, faUtensils } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h1>Discover <span className="underline-container">Our</span><br/><span className="highlight-text">Food Story</span></h1>
            <p>
              Our journey began with a simple passion: to share the authentic flavors
              of our culture with the world. We believe that food is more than just
              sustenance—it's an experience, a memory, and a way to connect.
            </p>
            <button className="about-us-cta">Explore Menu</button>
          </div>
          <div className="about-us-visuals">
            <img src={about_us_girl} alt="Our Chef" className="main-image" />
            {/* <div className="floating-food food-1">
              <img src={food_icon1} alt="Delicious Food" />
            </div>
            <div className="floating-food food-2">
              <img src={food_icon2} alt="Delicious Food" />
            </div>
            <div className="floating-food food-3">
              <img src={food_icon3} alt="Delicious Food" />
            </div>
            <div className="floating-food food-4">
              <img src={food_icon4} alt="Delicious Food" />
            </div> */}
            <div className="stats-box">
              <div className="stat">
                <strong>10k+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="stat">
                <strong>200+</strong>
                <span>Dishes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Why Choose Us Section --- */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <FontAwesomeIcon icon={faLeaf} className="feature-icon" />
            <h3>Fresh Ingredients</h3>
            <p>We source the finest local ingredients to create fresh, flavorful dishes every day.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faTruckFast} className="feature-icon" />
            <h3>Fast Delivery</h3>
            <p>Our dedicated delivery team ensures your food arrives hot and on time, every time.</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faUtensils} className="feature-icon" />
            <h3>Authentic Recipes</h3>
            <p>Our chefs use traditional recipes passed down through generations to bring you authentic taste.</p>
          </div>
        </div>
      </div>

      {/* --- Our Mission Section --- */}
      <div className="our-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>To be the most loved and trusted food delivery service by consistently providing delicious meals, exceptional service, and a seamless ordering experience. We aim to bring joy to your table, one meal at a time.</p>
        </div>
      </div>
      
      {/* --- Testimonials Section --- */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
            <div className="testimonial-card">
                <p>"The best food delivery I've ever tried! The flavors were incredible, and it arrived so fast. Highly recommend the Paneer Butter Masala!"</p>
                <span>- Anjali P.</span>
            </div>
            <div className="testimonial-card">
                <p>"A lifesaver for busy professionals. The quality is consistently amazing, and the variety of options keeps me coming back. A true taste of home!"</p>
                <span>- Rohan S.</span>
            </div>
            <div className="testimonial-card">
                <p>"I hosted a party and ordered from here. Everyone loved the food! The biryani was a huge hit. Thank you for making my event a success."</p>
                <span>- Meera K.</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
