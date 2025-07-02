import React from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'
import './Myorder.css'
import { useNavigate } from 'react-router-dom';

const Myorder = () => {
    const { myorder, food_list } = useContext(StoreContext);
    const navigate = useNavigate();
    // Get all ordered items
    const orderedItems = food_list.filter(item => myorder[item._id] && myorder[item._id].quantity > 0);
    // Summary
    const totalOrders = orderedItems.length;
    const totalSpent = orderedItems.reduce((sum, item) => {
      const order = myorder[item._id];
      const shipping = order.shipping || 0;
      const discount = order.discount || 0;
      return sum + (item.price * order.quantity + shipping - discount);
    }, 0);

    if (totalOrders === 0) {
      return (
        <div className="order-container empty-order">
          <h3>My Orders</h3>
          <div className="no-orders">
            <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="No orders" style={{width:80, marginBottom:16}} />
            <div>No orders yet. Start shopping!</div>
          </div>
        </div>
      );
    }

    return (
      <div className="order-container">
        <h3>My Orders</h3>
        <div className="order-summary-row">
          <span>Total Orders: <b>{totalOrders}</b></span>
          <span>Total Spent: <b>₹{totalSpent.toFixed(2)}</b></span>
        </div>
        <div className="order-header">
          <p>Product</p>
          <p>Order Name</p>
          <p>Order ID</p>
          <p>Date</p>
          <p>Status</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <hr />


 
        <div className="Order-List">
          {orderedItems.map((item, index) => {
            const order = myorder[item._id];
            // Mock order info
            const orderId = order.orderId || ("ORD" + (1000 + index));
            const orderDate = order.date || (new Date(Date.now() - index * 86400000).toLocaleDateString());
            const status = order.status || (index % 2 === 0 ? "Delivered" : "Processing");
            return (
              <div key={index} className='order-item'>
                <div className="orderItem-Img" onClick={() => navigate(`/product/${item._id}`)} style={{cursor:'pointer'}}>
                  <img src={item.image && !item.image.startsWith('http') ? `http://localhost:5000/upload/${item.image}` : item.image} alt={item.name} />
                </div>
                <div className="orderItem-desc">
                  <p className="order-name" onClick={() => navigate(`/product/${item._id}`)} style={{cursor:'pointer'}}>{item.name}</p>
                  <p className="order-id">{orderId}</p>
                  <p className="order-date">{orderDate}</p>
                  <p className={`order-status ${status.toLowerCase()}`}>{status}</p>
                  <p className="order-quantity">{order.quantity}</p>
                  <p className="order-price">₹{item.price}</p>
                  <p className="order-total">
                    ₹{(item.price * order.quantity).toFixed(2)}
                    
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Myorder