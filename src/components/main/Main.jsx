import { useState, useEffect } from 'react'

import Cantidades from './Cantidades'
import UltimoCurso from './UltimoCurso'
import Categorias from './Categorias'

const Main = () => {
    const [usersData, setUsers] = useState({})
    const [productsData, setProductsData] = useState({})
    useEffect(() => {
        fetch('http://localhost:3023/api/users/')
        .then(res => res.json())
        .then(data => {
            setUsers(prevUsersData => data)
        })

        fetch('http://localhost:3023/api/products/')
        .then(res => res.json())
        .then(data => {
            setProductsData(prevProductsData => data)
        })
    }, [])

    const cantidades = [
        {
            titulo: 'Productos',
            cantidad: productsData.count
        },
        {
            titulo: 'Usuarios',
            cantidad: usersData.count
        }
    ]

    return (
        <div className="content bg-primary flex-g-2">
            <div className="app-container flex flex-column gap-200">

                <h3>Muucs Dashboard</h3>

                <div className="wrapper-top flex gap-100">
                    <Cantidades cantidades={cantidades}/>
                </div>
                
                <div className="wrapper-bottom flex space-between gap-100">
                    {
                        productsData.products &&
                        <UltimoCurso 
                            titulo={productsData.products[0].name}
                            descripcion={productsData.products[0].description}
                            imagen={productsData.products[0].image}
                        />
                    }
                    {
                        productsData.countByCategory &&
                        <Categorias 
                            categorias={productsData.countByCategory} 
                        />
                    }
                </div>
            </div>
        </div>
    )
}


export default Main