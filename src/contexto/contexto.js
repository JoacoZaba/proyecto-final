import React,{createContext, useState} from "react";



export const ProductoContext = createContext(); 

export const ProductoProvider = ({children}) => {
    const [productos,setProductos] = useState([]);
    const [carrito,setCarrito] = useState([]);
    const agregarCarrito =(producto)=>{
        var foundIndex = carrito.findIndex(x => x.id === producto.id);
        console.log(foundIndex)
        if (foundIndex !== -1) {
            console.log(carrito[foundIndex])//carrito[foundIndex].count++;
            //setCarrito(carrito.map((item)=>( item.id === producto.id ? {...item, count: item.count++ } : item )));
            const updateCarrito = [...carrito];
            updateCarrito[foundIndex].count++;
            setCarrito(updateCarrito)
        } else {
            setCarrito([
                ...carrito,
                {
                    ...producto,
                    count: 1,
                }
            ]);
        }
    }
    const removerDelCarrito =(producto)=>{
        var foundIndex = carrito.findIndex(x => x.id === producto.id)
        console.log(foundIndex);
        if (foundIndex !== -1) {
            if (carrito[foundIndex].count===1){
                console.log("lo encontre", carrito[foundIndex].count);
                //carrito[foundIndex].count--;
                setCarrito(carrito.filter(x => x.id !== producto.id))
            } else {
                console.log("no lo encontre", carrito[foundIndex].count);
                //setCarrito(carrito.map((item)=>( item.id === producto.id ? {...item, count: item.count-- } : item )));
                const updateCarrito = [...carrito];
                updateCarrito[foundIndex].count--;
                setCarrito(updateCarrito)
            }
        
        } 
    }
    return(

        <ProductoContext.Provider value={{productos,setProductos,carrito,agregarCarrito,removerDelCarrito}}> 
            {children} 
        </ProductoContext.Provider>

    )

}

