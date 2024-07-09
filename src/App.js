import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './components/products';
import React, { useState } from 'react';
import AddProduct from './components/AddProduct';
import { Toaster } from 'react-hot-toast';
import ScrollTop from './components/ScrollTop';

function App() {
  const [productList, setProductList] = useState(products);

  return (
    <div>
        <Router>  
          <ScrollTop /> 
          <Routes>
            <Route exact path='/' element={
              <div className='bg-gradient-to-tr from-[#3a210e] via-[#131111] to-[#3a210e]'> 
                <Navbar/>
                <ProductList products={productList} setProducts={setProductList} />
              </div>
            }/>
            <Route exact path='/view-cart' element={
              <div className='bg-gradient-to-tr from-[#3a210e] via-[#131111] to-[#3a210e]'>
                <Navbar/>
                <Cart products={productList} setProducts={setProductList} />
              </div>
            }/>
            <Route exact path='/add-product' element={
              <div className='bg-gradient-to-tr from-[#3a210e] via-[#131111] to-[#3a210e]'>
                <Navbar/>
                <AddProduct setProducts={setProductList} />
              </div>
            }/>
          </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
