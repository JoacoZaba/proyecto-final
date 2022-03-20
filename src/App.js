import './app.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Producto1 from './components/Productos/Producto1/producto1';
import Producto2 from './components/Productos/Producto2/producto2';
import Producto3 from './components/Productos/Producto3/producto3';
import Producto4 from './components/Productos/Producto4/producto4';
import Producto5 from './components/Productos/Producto5/producto5';
import Producto6 from './components/Productos/Producto6/producto6';
import Footer from './components/Footer/footer';

function App() {
  return (
      <div className='app'>
        <div className='header'>
          <Header/>
        </div>
        <div className='nav'>
          <Nav/> 
        </div>
        <div className="producto" id='producto1'>
          <Producto1/>
        </div >
        <div className="producto" id='producto2'>
          <Producto2/>
        </div>
        <div className="producto" id='producto3'>
          <Producto3/>
        </div> 
        <div className="producto" id='producto4'>
          <Producto4/>
        </div>
        <div className="producto" id='producto5'>
          <Producto5/>
        </div>
        <div className="producto" id='producto6'>
          <Producto6/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div> 
  );
}

export default App; 