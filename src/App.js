import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsByCategory from './pages/ProductsByCategory';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';

function App() {

const [products, setProducts]=useState([]);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => setProducts(response.data));
  }, [])

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element = {<HomePage products={products}/>}/>
          <Route path='/productdetails/:selectedId' element={<ProductDetail/>}/>
          <Route path='/products/category/:selectedMenu' element={<ProductsByCategory/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
