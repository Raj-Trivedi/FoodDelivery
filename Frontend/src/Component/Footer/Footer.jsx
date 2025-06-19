import React from 'react';
import './Footer.css';
import twitterIcon from '../../../../assets/frontend_assets/twitter_icon.png';
// import twitterIcon from '../../../../assets/frontend_assets/twitter_icon.png';
import facebookIcon from '../../../../assets/frontend_assets/facebook_icon.png';
import LinkedinIcon from '../../../../assets/frontend_assets/linkedin_icon.png';

// import logo from '../../../assets/frontend_assets/img/logos/illustration-organic-food.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <h3>FOLLOW</h3>
        <div className="social-icons">
          <img src={twitterIcon} alt="Twitter" />
          <img src={LinkedinIcon} alt="LinkedIn" />
          {/* <img src={twitterIcon} alt="Instagram" /> */}
          <img src={facebookIcon} alt="Facebook" />
        </div>
      </div>

      <div className="footer-links">
        <div className="link-column">
          <h4>User Area</h4>
          <a href="#">My Account</a>
          <a href="#">My Cart</a>
          <a href="#">Login</a>
          <a href="#">Checkout</a>
        </div>
        <div className="link-column">
          <h4>Shopping Guide</h4>
          <a href="#">Payment</a>
          <a href="#">Shipment</a>
          <a href="#">FAQ</a>
          <a href="#">Return Policy</a>
        </div>
        <div className="link-column">
          <h4>Site Map</h4>
          <a href="#">Payment</a>
          <a href="#">Shipment</a>
          <a href="#">FAQ</a>
          <a href="#">Return Policy</a>
        </div>
      </div>

      <div className="footer-contact">
        <h4>Contact Details</h4>
        <p>📍 Tower Street NY-11001, USA</p>
        <p>📞 00 1234 567 789 | 98 0763 423 654</p>
        <p>📧 info@mail.com</p>
        <h4>Payment Options</h4>
        <div className="payment-icons">
          <img src={twitterIcon} alt="PayPal" />
          <img src={twitterIcon} alt="Visa" />
          <img src={twitterIcon} alt="MasterCard" />
        </div>
        <h4>Newsletter</h4>
        <div className="newsletter">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
