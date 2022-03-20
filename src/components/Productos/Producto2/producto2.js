import Guante from './prostarnegro.jpg'

function Producto () {
    return(
        <div>
            <div id="producto">
                <h2>Prostar Thunder </h2>
            </div>
            <div>
                <img src = {Guante} width={350} height={350}/>
            </div>
        </div>
    );
}

export default Producto;