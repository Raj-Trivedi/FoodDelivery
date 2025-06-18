import React from 'react'
import Explore from '../Component/Explore/Explore'
import Header from '../Component/Header/Header'
import FoodDisplay from '../Component/FoodDisplay/FoodDisplay'
const Home = () => {
      const [Category, setCategory] = React.useState('All');
  
  return (
    <div>
        <Header/>
        <Explore Category={Category} setCategory={setCategory}/>
        <FoodDisplay Category={Category} />
    </div>
  )
}
export default Home
