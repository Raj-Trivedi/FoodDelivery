import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import StoreContextProvider from '../src/Context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <StoreContextProvider>
   {/* <Routes>
   </Routes> */}
   <App />
   </StoreContextProvider>
  </BrowserRouter>
   
)
