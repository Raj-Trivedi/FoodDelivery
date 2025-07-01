import React from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'
import './Myorder.css'
import { useNavigate } from 'react-router-dom';

const Myorder = () => {
<<<<<<< HEAD
    const { myorder,food_list,CartItems } = useContext(StoreContext);
    console.log(myorder);
    console.log(CartItems,"CartItems")
=======
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
>>>>>>> e92c8dd133807b0e26dc89872e06c5066f662475

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
<<<<<<< HEAD

       <div className="Order-List">
        {food_list && food_list.length > 0 ? (
          food_list.map((item, index) => {
            // Check if item and item._id exist to avoid runtime errors
            if (item && item._id && myorder[item._id] > 0) {
                return (
                    <div key={item._id} className='order-item'>
                        <div className="orderItem-Img">
                            <img src={item.image} alt={item.name || "food item"} />
                        </div>
                        <div className="orderItem-desc">
                            {/* <p className='order-id'>{item._id}</p> */}
                            <p>{item.name}</p>
                            <p className='order-quantity'>{myorder[item._id]}</p>
                            <p className='order-total'>₹{Number(item.price).toFixed(2)}</p>
                            <p>₹{(Number(item.price) * myorder[item._id]).toFixed(2)}</p>
                        </div>
                    </div>
                )
            }
            return null;
          })
        ) : (
          <p>No items found in your order.</p>
        )}
       </div>
    </div>
  )
=======
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
                  <img src={item.image} alt={item.name} />
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
>>>>>>> e92c8dd133807b0e26dc89872e06c5066f662475
}

export default Myorder