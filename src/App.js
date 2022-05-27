import React from 'react';
import './app.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Productos from './components/Productos/productos';
import Footer from './components/Footer/footer';
import {ProductoProvider} from './contexto/contexto';
import Carrito from './components/carrito/carrito';


const App = () => {
  return (
    <ProductoProvider>
      <div className='app'>
        <div className='header'>
          <Header/>
        </div>
        <div className='nav'>
          <Nav/> 
        </div>
        <div className="producto" id='producto1'>
          <Productos/>
        </div>
        <div className='carrito'>
          <Carrito/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div> 
    </ProductoProvider>
  );
}

export default App; 