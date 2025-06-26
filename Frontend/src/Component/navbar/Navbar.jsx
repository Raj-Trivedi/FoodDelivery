import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../../../assets/frontend_assets/img/logos/illustration-organic-food.png'
import search_icon from '../../../../assets/frontend_assets/search_icon.png'
import Cart_icon from '../../../../assets/frontend_assets/basket_icon.png'
import cross_icon from '../../../../assets/frontend_assets/cross_icon.png'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext.jsx';
import  { useContext } from 'react';
import { AppContext } from '../../Context/AppContext.jsx'

// import 

export const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [searchActive, setSearchActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();
    const { User, SetUser,isAuthenticated ,setIsAuthenticated } = useContext(AppContext);
    

   const { CartItems,searchItem,setSearchItem } = useContext(StoreContext);
//    console.log(CartItems.length)

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

    const DesktopMenu = () => (
        <ul className="navbar-menu">
            <li onClick={() => { setMenu("home"); navigate("/") }} className={menu === "home" ? "active" : ""}>Home</li>
            <li onClick={() => { setMenu("menu"); navigate("/menu") }} className={menu === "menu" ? "active" : ""}>Menu</li>
            <li onClick={() => { setMenu("about"); navigate("/aboutUs") }} className={menu === "about" ? "active" : ""}>About us</li>
            {User && (
                <li onClick={() => { setMenu("myorder"); navigate("/myorder") }} className={menu === "myorder" ? "active" : ""}>My Orders</li>
            )}
        </ul>
    );

    const MobileSidebar = () => (
        <div className={`mobile-sidebar ${showMenu ? 'show-menu' : ''}`}>
            <img src={cross_icon} alt="Close" className="close-menu-icon" onClick={() => setShowMenu(false)} />
            <ul className="mobile-menu">
                <li onClick={() => { navigate("/"); setShowMenu(false); }}>Home</li>
                <li onClick={() => { navigate("/menu"); setShowMenu(false); }}>Menu</li>
                <li onClick={() => { navigate("/aboutUs"); setShowMenu(false); }}>About us</li>
            </ul>
        </div>
    );

    return (
        <>
            <nav className="navbar">
                     <div className="hamburger-menu" onClick={() => setShowMenu(true)}>
                        <div/><div/><div/>
                    </div>
                <div className="navbar-section navbar-left">
                    <img src={logo} onClick={() => navigate('/')} alt="Logo" className="navbar-logo" />
                </div>
                <div className="navbar-section navbar-center">
                    <DesktopMenu />
                </div>
                <div className="navbar-section navbar-right">
                    
                    <div className={`navbar-search${searchActive ? ' active' : ''}`} ref={searchInputRef}>
                         <input
                            type="text"
                            placeholder="Search"
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)}
                            
                            onFocus={() => setSearchActive(true)}
                            className={searchActive ? 'expanded' : ''}
                        />
                        <img
                            src={search_icon}
                            alt="Search"
                            className="navbar-search-icon"
                            onClick={() => {
                                setSearchActive(true);
                                navigate('/menu');
                                setTimeout(() => {
                                    if (searchInputRef.current) {
                                        const input = searchInputRef.current.querySelector('input');
                                        if (input) input.focus();
                                    }
                                }, 100);
                            }}
                        />
                       
                    </div>
                    <div className="navbar-cart">
                        <div className="navbar-cart-circle">
                            <img src={Cart_icon}  onClick={() => navigate('/cart')} alt="Cart" />
                            <span className="navbar-cart-badge"> {Object.keys(CartItems).length}</span>
                        </div>
                    </div>
                    { User ?
                        <button className="navbar-signin-btn" onClick={() => {navigate('/'); SetUser(null) } }>Log out</button>

                    :
                        <button className="navbar-signin-btn" onClick={() => {navigate('/signup'); setIsAuthenticated("false")} }>Log in</button>

                    }
                </div>
            </nav>
            <MobileSidebar />
        </>
    )
}
