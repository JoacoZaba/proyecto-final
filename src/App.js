import './app.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Productos from './components/Productos/productos';
import Footer from './components/Footer/footer';

const App = () => {
  return (
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
        <div className='footer'>
          <Footer/>
        </div>
      </div> 
  );
}

export default App; 