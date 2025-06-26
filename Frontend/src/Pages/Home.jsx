import React from 'react'
import Explore from '../Component/Explore/Explore'
import Header from '../Component/Header/Header'
import FoodDisplay from '../Component/FoodDisplay/FoodDisplay'
import Footer from '../Component/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
      const [category, setCategory] = React.useState('All');
  
  // Notification handlers
  const handleAddToCart = () => {
    toast.success('Item added to cart', { position: 'bottom-left', autoClose: 1200 });
  };
  const handleRemoveFromCart = () => {
    toast.info('Item removed from cart', { position: 'bottom-left', autoClose: 1200 });
  };

  return (
    <div className='home-container '>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
        <ToastContainer />
    </div>
  )
}
export default Home;
