
import { Navbar } from './Component/navbar/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import About from './Pages/AboutUs.jsx';


function App() {
   
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/aboutUs" element={<About />} />
     </Routes>
    
      
    </>
  )
}

export default App
