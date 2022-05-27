import React,{useContext} from "react";
import { ProductoContext } from "../../contexto/contexto";
import Producto from "../Productos/Producto/producto";

const Carrito =()=> {
    const {carrito} = useContext(ProductoContext);
    return (
        <div>
            <h2>
                Carrito
            </h2>
            {carrito.map(item => <Producto item={item}/>)}
        </div>
    ) 

    
}
export default Carrito;