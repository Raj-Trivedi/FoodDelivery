import React, { useContext, useState } from 'react';
import './ProductDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { food_list, addToCart, CartItems } = useContext(StoreContext);
  const product = food_list.find(item => item._id === id);
  const [rating, setRating] = useState(4); // Mock default rating
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [selectedServe, setSelectedServe] = useState(1);
  const [mainImg, setMainImg] = useState(product ? product.image : '');

  // Mock data for subtitle, tags, and review count
  const subtitle = product?.subtitle || 'with Garlic Crostinis';
  const reviewCount = reviews.length || 29;
  const tags = product?.tags || [
    { label: 'Non Vegetarian', type: 'nonveg' },
    { label: 'American', type: 'cuisine' },
    { label: 'Main Course', type: 'course' }
  ];

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

  // Related products (same category, exclude self)
  const related = food_list.filter(item => item.category === product.category && item._id !== product._id).slice(0, 4);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      setReviews([...reviews, { rating, text: review }]);
      setReview('');
      setRating(4);
    }
  };

  const handleAddToCart = () => {
    addToCart(product._id);
  };

  // For thumbnails, use main image for now
  const thumbnails = [product.image, product.image, product.image];

  return (
    <div className="product-detail-container">
      <div className="product-main modern-layout">
        <div className="product-img-section">
          <img src={mainImg} alt={product.name} className="product-detail-img-large" />
          <div className="product-thumbnails">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`product-thumb ${mainImg === img ? 'selected' : ''}`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-info modern-info">
          <h1>{product.name}</h1>
          <div className="product-subtitle">{subtitle}</div>
          <div className="product-rating-row">
            <span className="product-stars">
              {[1,2,3,4,5].map(val => (
                <span
                  key={val}
                  className={val <= rating ? 'star filled' : 'star'}
                >★</span>
              ))}
            </span>
            <span className="product-review-count">({reviewCount})</span>
          </div>
          <div className="product-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className={`product-tag tag-${tag.type}`}>{tag.label}</span>
            ))}
          </div>
          <div className="product-price-row">
            <span className="product-price">Price <b>₹{product.price.toFixed(2)}</b></span>
            <span className="product-serves">Serves
              {[1,2,3,4,5].map(val => (
                <button
                  key={val}
                  className={`serves-btn${selectedServe === val ? ' selected' : ''}`}
                  onClick={() => setSelectedServe(val)}
                >{val}{val === 5 ? '+' : ''}</button>
              ))}
            </span>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <p className="product-long-desc">{product.longDescription || 'This is a long description of the product. More details can be added here.'}</p>
        </div>
      </div>
      <div className="product-review-section">
        <h2>Reviews</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <textarea
            value={review}
            onChange={e => setReview(e.target.value)}
            placeholder="Write your review..."
            required
          />
          <button type="submit">Add Review</button>
        </form>
        <div className="reviews-list">
          {reviews.length === 0 && <div className="no-reviews">No reviews yet.</div>}
          {reviews.map((r, idx) => (
            <div key={idx} className="review-item">
              <span className="review-rating">{'★'.repeat(r.rating)}</span>
              <span className="review-text">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-list">
          {related.map(item => (
            <div key={item._id} className="related-card" onClick={() => navigate(`/product/${item._id}`)}>
              <img src={item.image} alt={item.name} />
              <div>{item.name}</div>
              <div>₹{item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 