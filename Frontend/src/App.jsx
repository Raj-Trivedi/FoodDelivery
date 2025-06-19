import { Navbar } from './Component/navbar/Navbar.jsx';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import About from './Pages/AboutUs.jsx';
import Footer from './Component/Footer/Footer.jsx';
import SignIn from './Pages/SignIn.jsx';

function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/signup" element={<SignIn />} /> 
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
