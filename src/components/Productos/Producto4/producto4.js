import Guante from './reuschwhite.jpg'

function Producto () {
    return(
        <div>
            <div id="producto">
                <h2>Reusch Attrakt </h2>
            </div>
            <div>
                <img src = {Guante} width={350} height={350}/>
            </div>
        </div>
    );
}

export default Producto;