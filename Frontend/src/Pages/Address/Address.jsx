import React from 'react';
import './Address.css';
// import locationImg from '../../assets/location.png'; 
import locationImg from "../.../../../../../assets/frontend_assets/img/add/4752200.jpg"

const Address = () => {
  return (
    <div className="address-container">
      <div className="form-section">
        <h2>
          Add Shipping <span className="highlighter">Address</span>
        </h2>

        <form className="address-form">
          <div className="double-input">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="double-input">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="double-input">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />

          <button type="submit" className="save-btn">Save Address</button>
        </form>
      </div>

      <div className="image-section">
        <img src={locationImg} alt="map-location" />
      </div>
    </div>
  );
};

export default Address;
