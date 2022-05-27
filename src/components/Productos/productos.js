import React, {useContext,useEffect} from 'react';
import Producto from './Producto/producto.js';
import {ProductoContext} from './../../contexto/contexto.js';

const Productos = (props) => {
    const {productos: Lista,setProductos} = useContext(ProductoContext)

    const productos = [
        {
        id:1,    
        name: 'Prostar Neosense',
        description: 'Some description here about the current item we are iterating',
        price: 6700,
        imageUrl: 'left this to the end',
    },
    {
        id:2,
        name: 'Prostar Thunder',
        description: 'Some description here about the current item we are iterating',
        price: 5200,
        imageUrl: 'left this to the end',
    },
    {
        id:3,
        name: 'Reusch Aqua',
        description: 'Some description here about the current item we are iterating',
        price: 9800,
        imageUrl: 'left this to the end',
    },
    {
        id:4,
        name: 'Reusch Atrakkt',
        description: 'Some description here about the current item we are iterating',
        price: 7800,
        imageUrl: 'left this to the end',
    },
    {
        id:5,
        name: 'Rinat Blue',
        description: 'Some description here about the current item we are iterating',
        price: 6300,
        imageUrl: 'left this to the end',
    },
    {
        id:6,
        name: 'Rinat Gold',
        description: 'Some description here about the current item we are iterating',
        price: 8900,
        imageUrl: 'left this to the end',
    }];
    
    useEffect(()=>{
        setProductos(productos);
    },[]);

    return Lista.map(item => <Producto item={item} />);
}

export default Productos;
    