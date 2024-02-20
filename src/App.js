// App.js

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'; // Replace with your actual Cart component
import LoginSignup from './Pages/LoginSignup'; // Replace with your actual LoginSignup component
import Footer from './Components/Footer/Footer';
import men_bunner from './Components/Assets/banner_mens.png'
import women_bunner from './Components/Assets/banner_women.png'
import kids_bunner from './Components/Assets/banner_kids.png'
import LocomotiveScrollComponent from './Locomotive'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_bunner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_bunner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_bunner} category="kid" />} />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      {/* <LoginSignup/> */}
      </BrowserRouter>
      <Footer />
      <LocomotiveScrollComponent/>
    </div>
  )
}

export default App;
