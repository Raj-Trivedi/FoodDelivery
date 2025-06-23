import React from 'react'
import './Header.css'
import foodImg from '../../../../assets/frontend_assets/img/header/thali.png'
import foodImg2 from '../../../../assets/frontend_assets/img/header/gulab janum.jpg'


const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Order Your Favourite <span className="highlight">Foods</span> & Easy Pickup
        </h1>
        <p className="hero-desc">
        Choose from a wide variety of delicious meals and get them delivered fast. Simple, quick, and just the way you like it.
        </p>
        <div className="hero-actions">
          <button className="hero-btn primary">Order Now</button>
          <button className="hero-btn howto">
            <span className="howto-circle" />
            How To Order
          </button>
        </div>
      </div>
      <div className="hero-image-frame">
        <img src={foodImg} alt="Food" className="hero-image" />
        <div className="hero-card">
          <img src={foodImg2} alt="Egg Salad" className="hero-card-img" />
          <div className="hero-card-info">
            <div className="hero-card-title">Free Desert on order above 500</div>
            <div className="hero-card-rating">⭐⭐⭐⭐⭐</div>
            {/* <div className="hero-card-user">Thomas Alva</div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header