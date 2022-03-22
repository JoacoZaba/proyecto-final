import Guante from './prostarneosense.jpg'

function Producto () {
    return(
        <div className='producto'>
            <div>
                <h2>Prostar Neosense </h2>
            </div>
            <div>
                <img src = {Guante} width={350} height={350}/>
            </div>
        </div>
    );
}

export default Producto;
