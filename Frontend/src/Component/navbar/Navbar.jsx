import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../../../assets/frontend_assets/img/logos/illustration-organic-food.png'
import search_icon from '../../../../assets/frontend_assets/search_icon.png'
import Cart_icon from '../../../../assets/frontend_assets/basket_icon.png'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [searchActive, setSearchActive] = useState(false);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();

    // Collapse search bar on outside click
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                setSearchActive(false);
            }
        }
        if (searchActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchActive]);

    return (
        <div className="nav-conatiner">
            <div className="nav_logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav_menu">
                <ul>
                    <li onClick={() => { setMenu("home"); navigate("/") }} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => { setMenu("menu"); navigate("/menu") }} className={menu === "menu" ? "active" : ""}>Menu</li>
                    <li onClick={() => { setMenu("about"); navigate("/aboutUs") }} className={menu === "about" ? "active" : ""}>About us</li>
                </ul>
            </div>
            <div className="nav_right">
                <div 
                    className={`search_icon${searchActive ? ' active' : ''}`}
                    ref={searchInputRef}
                >
                    <input 
                        type="text" 
                        placeholder='Search' 
                        style={{ transition: 'width 0.3s' }}
                        onFocus={() => setSearchActive(true)}
                        className={searchActive ? 'expanded' : ''}
                    />
                    <img 
                        src={search_icon} 
                        alt="" 
                        className={searchActive ? 'icon-animate' : ''}
                        onClick={() => {
                            setSearchActive(true);
                            setTimeout(() => {
                                if (searchInputRef.current) {
                                    const input = searchInputRef.current.querySelector('input');
                                    if (input) input.focus();
                                }
                            }, 100);
                        }}
                    />
                </div>
                <div className="cart_div">
                    <img src={Cart_icon} alt="" />
                    <div className="cart_Quantity"> 1</div>
                </div>
                <div className="nav_btn">
                    <button onClick={() => navigate("/signup")}> Sign in</button>
                </div>
            </div>
        </div>
    )
}
