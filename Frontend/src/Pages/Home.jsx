import React from 'react'
import Explore from '../Component/Explore/Explore'
import Header from '../Component/Header/Header'
import FoodDisplay from '../Component/FoodDisplay/FoodDisplay'
import Footer from '../Component/Footer/Footer'
const Home = () => {
      const [category, setCategory] = React.useState('All');
  
  return (
    <div className='home-container '>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
        
    </div>
  )
}
export default Home;
