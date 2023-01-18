const UltimoCurso = props => {
    return (
        <div className="w-100 card card-big fc-dark">
            <div className="card-big__title p-100">
                <h3>Ultimo Curso Actualizado</h3>
            </div>
            <div className="card-big__content flex-column w-100 gap-100 p-100">
                <div>
                    <img src={props.imagen} alt={props.titulo} />
                </div>
                <div>
                    <h4>{props.titulo}</h4>
                    <p>{props.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default UltimoCurso