import Logo from './icono.png'
import './header.css'

function Header () {
    return (
        <div>
            <img src={Logo} id="logo" alt='logo'/>
        </div>
    );
}

export default Header;