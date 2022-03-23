 
import Producto from './Producto/producto.js'

const Productos = (props) => {

    const productos = [{
        name: 'Prostar Neosense',
        description: 'Some description here about the current item we are iterating',
        price: 6700,
        imageUrl: 'left this to the end',
    },
    {
        name: 'Prostar Thunder',
        description: 'Some description here about the current item we are iterating',
        price: 5200,
        imageUrl: 'left this to the end',
    },
    {
        name: 'Reusch Aqua',
        description: 'Some description here about the current item we are iterating',
        price: 9800,
        imageUrl: 'left this to the end',
    },
    {
        name: 'Reusch Atrakkt',
        description: 'Some description here about the current item we are iterating',
        price: 7800,
        imageUrl: 'left this to the end',
    },
    {
        name: 'Rinat Blue',
        description: 'Some description here about the current item we are iterating',
        price: 6300,
        imageUrl: 'left this to the end',
    },
    {
        name: 'Rinat Gold',
        description: 'Some description here about the current item we are iterating',
        price: 8900,
        imageUrl: 'left this to the end',
    }];

    return productos.map(item => <Producto item={item} />);
}

export default Productos;
