const ItemCantidades = props => {
    const sytles = {
        "--color-card": props.titulo === 'Productos' ? 'blue' : 'green'
    }

    return (
        <div 
            className="card card-small w-100"
            style={sytles}
        >
            <div className="p-100">
                <h3>{props.titulo}</h3>
                <p>{props.cantidad}</p>
            </div>
            <div className="p-100">
                {
                    props.titulo === 'Productos' ?
                    <i class="fa-solid fa-book"></i>
                    :
                    <i class="fa-solid fa-users"></i>
                }
            </div>
        </div>
    )
}

const Cantidades = props => {
    const itemElements = props.cantidades.map((cantidad, key) => (
        <ItemCantidades 
            key={key}
            titulo={cantidad.titulo}
            cantidad={cantidad.cantidad}
        />
    ))
    return (
        <>
            {itemElements}
        </>
    )
}

export default Cantidades