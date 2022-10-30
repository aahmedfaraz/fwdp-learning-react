import React from 'react';
import './App.css';
// importing routing elements
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing other components
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import ProductCard from './components/products/ProductCard';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:slug' element={<ProductCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
