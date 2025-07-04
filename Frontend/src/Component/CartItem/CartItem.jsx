import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './CartItem.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({totalItems}) => {
  const { food_list, CartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Calculate total items in cart
  // const totalItems = Object.values(CartItems).reduce((acc, item) => acc + item, 0);

  return (
    <div className='CartItem-Container'>
      <h2>
        Shopping Cart <span>{totalItems} Items</span>
      </h2>

      <div className='Cart-heading'>
        <p className='Pro-detail'>PRODUCT DETAILS</p>
        <p>QUANTITY</p>
        <p>PRICE</p>
        <p>TOTAL</p>
      </div>

      {food_list.map((item, index) => {
        if (CartItems[item._id] > 0) {
          return (
            <div key={index} className='cart-items'>
              <div className='Cart-item_details'>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  {/* <span>PS4</span> */}
                  <span onClick={() => {
                    if (CartItems[item._id] === 1) {
                      removeFromCart(item._id);
                      toast.info('Item removed from cart', { position: 'bottom-left', autoClose: 1200 });
                    } else {
                      removeFromCart(item._id);
                    }
                  }}>Remove</span>
                </div>
              </div>
              <div className="cartitem-des">
                 <div className='QuantityControl'>
                 <button onClick={() => {
                   if (CartItems[item._id] === 1) {
                     removeFromCart(item._id);
                     toast.info('Item removed from cart', { position: 'bottom-left', autoClose: 1200 });
                   } else {
                     removeFromCart(item._id);
                   }
                 }}>-</button>
                 <p>{CartItems[item._id]}</p>
                 <button onClick={() => {
                   if (CartItems[item._id] === 0 || CartItems[item._id] === undefined) {
                     addToCart(item._id);
                     toast.success('Item added to cart', { position: 'bottom-left', autoClose: 1200 });
                   } else {
                     addToCart(item._id);
                   }
                 }}>+</button>
                 </div>  

                 <p>₹{item.price.toFixed(2)}</p>
                 <p>₹{(item.price * CartItems[item._id]).toFixed(2)}</p>

              </div>

             
            </div>
          );
        }
        return null;
      })}

      <a href="/menu" className="ContinueShopping">← Continue Shopping</a>
      <ToastContainer />
    </div>
  );
};

export default CartItem;
