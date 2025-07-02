import { Navbar } from './Component/navbar/Navbar.jsx';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import AboutUsSec from './Pages/AboutUsSec.jsx';
import Footer from './Component/Footer/Footer.jsx';
import SignIn from './Pages/SignIn.jsx';
import Cart from './Pages/Cart.jsx'
import Address from './Pages/Address/Address.jsx';
import ProductDetail from './Component/ProductDetail/ProductDetail.jsx';
import Myorder from './Pages/Myorder/Myorder.jsx';
import Admin from './Pages/AdminPanel/Admin.jsx';
import ItemListing from './Pages/ItemListing/ItemListing.jsx';
import AdminPanelNew from './Pages/adminpanelnew/AdminPanelNew.jsx';

import './Responsive.css';

function App() {
  const location = useLocation();
//false
  const isAuthPage = location.pathname === "/signup";
  const isSellerPath= location.pathname.startsWith("/admin");

  // // If the path starts with /admin, we consider it as an admin page
  // if (isSellerPath) {
  //   return <Admin />;
  // }

  return (
    <>
    {/* true */}
      {!isAuthPage && <Navbar />} 


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutUs" element={<AboutUsSec />} />
        <Route path="/signup" element={<SignIn />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/address" element={<Address />} /> 
        <Route path="/product/:category/:id" element={<ProductDetail />} />
        <Route path="/myorder" element={<Myorder />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/ItemListing" element={<ItemListing/>} />
        <Route path="/admin/new" element={<AdminPanelNew />} />

        
        


      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
