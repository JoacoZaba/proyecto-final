import Guante from './rinatdorado.jpg'

function Producto () {
    return(
        <div>
            <div id="producto">
                <h2>Rinat Gold </h2>
            </div>
            <div>
                <img src = {Guante} width={350} height={350}/>
            </div>
        </div>
    );
}

export default Producto;