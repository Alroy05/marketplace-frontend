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

function App() {
  const [productList, setProductList] = useState(products);
  return (
    <div>
        <Router>  
          <Routes>
            <Route exact path='/' element={
              <> 
                <Navbar/>
                <ProductList products={productList} setProducts={setProductList} />
              </>
            }/>
            <Route exact path='/view-cart' element={
              <>
                <Navbar/>
                <Cart products={productList} setProducts={setProductList} />
              </>
            }/>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
