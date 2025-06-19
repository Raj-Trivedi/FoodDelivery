import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../../../../assets/frontend_assets/img/logos/illustration-organic-food.png'
import search_icon from '../../../../assets/frontend_assets/search_icon.png'
import Cart_icon from '../../../../assets/frontend_assets/basket_icon.png'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu] = React.useState("home");
    const navigate= useNavigate();
  return (
    <div className="nav-conatiner">
        <div className="nav_logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav_menu">
            <ul>
                <li onClick={()=>{setMenu("home"); navigate("/")}} className={menu==="home" ?"active": ""}>Home</li>
                <li onClick={()=>{setMenu("menu"); navigate("/menu")}} className={menu==="menu" ?"active": ""}>Menu</li>
                <li onClick={()=>{setMenu("about"); navigate("/aboutUs")}} className={menu==="about" ?"active": ""}>About us</li>
            </ul>
        </div>
        <div className="nav_right">
            <div className="search_icon">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />

            </div>
            <div className="cart_div">
              <img src={Cart_icon} alt="" />
              <div className="cart_Quantity"> 1</div>

            </div>
            <div className="nav_btn">
                <button onClick={()=>navigate("/signup")} > Sign in</button>

            </div>
        
        </div>

    </div>

  )
}
