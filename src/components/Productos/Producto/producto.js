const Producto = (props) => {
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
        </div>
    );
}

export default Producto;