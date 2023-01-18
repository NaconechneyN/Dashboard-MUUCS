const ItemCategorias = props => {
    return (
        <li>
            <div>
                {props.nombre}
            </div>
        </li>
    )
}

const Categorias = props => {
    const categoriasElements = props.categorias.map((categoria, key) => (
        <ItemCategorias
            key={key}
            nombre={categoria.name}
            cantidad={categoria.count}
        />
    ))

    return (
        <div className="w-100 card card-big">
            <div className="card-big__title p-100">
                <h3 className="fc-dark">Categorias</h3>
            </div>
            <div className="card-big__content w-100 h-100 p-100">
                <ul className="grid">
                    {categoriasElements}
                </ul>
            </div>
        </div>
    )
}

export default Categorias