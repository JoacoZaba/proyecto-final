import './nav.css';

function Nav () {
    return(
        <div id="nav">
            <div id="inicio" className='navBar'>
                <a href="">
                    Inicio
                </a>
            </div>
            <div id="productos" className='navBar'>
                <a href="">
                    Productos
                </a>
            </div>
            <div id="mediTuTalle" className='navBar'>
                <a href="">
                    Medi tu talle
                </a>
            </div>
            <div id="cuidadoDeTuGuante" className='navBar'>
                <a href="">
                    Cuidado de tu guante
                </a>
            </div>
            <div id="contacto" className='navBar'>
                <a href="">
                    Contacto
                </a>
            </div>
        </div>
    );
}

export default Nav