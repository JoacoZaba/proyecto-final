import { useContext } from "react"
import { ProductoContext } from "../../../contexto/contexto"
import Prostarb from "./prostarnegro.jpg"
import Prostarn from "./prostarneosense.jpg"
import Reuscha from "./reuschaqua.jpg"
import Reuschw from "./reuschwhite.jpg"
import Rinata from "./rinatazul.jpg"
import Rinatd from "./rinatdorado.jpg"

const Producto = (props) => {
    const {agregarCarrito,removerDelCarrito} = useContext(ProductoContext)
    const { name, description, price, imageUrl } = props.item;
    return(
        <div className='producto'>
            <div>
                <h1>{name} </h1>
            </div>
            <div>
                <p>{description} </p>
            </div>
            <div>
                <img src = {imageUrl} width={350} height={350}/>
            </div>
            <div>
                <h2>{price} </h2>
            </div>
            <div>
                <button onClick={()=>{agregarCarrito(props.item)}}>Agregar Producto</button>
                <button onClick={()=>{removerDelCarrito(props.item)}}>Remover Producto</button>
            </div>
            {props.item.count ? (<div>Count: {props.item.count}</div>): null}
        </div>
    );
}

export default Producto;  
  