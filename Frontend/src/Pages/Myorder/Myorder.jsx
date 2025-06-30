import React from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useContext } from 'react'
import './Myorder.css'

const Myorder = () => {
    const { myorder,food_list,CartItems } = useContext(StoreContext);
    console.log(myorder);
    console.log(CartItems,"CartItems")

  return (
    <div className="order-container">
       <h3> Order Details </h3> 
        <div className="order-header">
            <p className='order-id'>Order Item</p>
            {/* <p className='order-date'>Order Id</p> */}
            <p>Order Name</p>
            <p>Quantity Orderd</p>
            <p className='order-status'>Price</p>
            <p className='order-total'>Total Price</p>
        </div>
        <hr />

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
}

export default Myorder