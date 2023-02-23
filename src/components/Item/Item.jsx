import React from 'react'
import { Link } from 'react-router-dom'
import ropa from '/src/assets/imgs/ropa.jpg'

const Item = ({id, name, stock, category}) => {
    return (
        <>

            <section className='card-container' key={id}>

                <div className='card'>
                    <div className='card-seccion1'>
                        <img src={ropa} alt="Imagen" />
                    </div>

                    <div className='card-seccion2'>
                        <h2>{name} </h2>
                        <p>Categoria: {category}</p>
                        <p className='txt-stock'>Stock: {stock}</p>
                    </div>

                    <div className='card-btn'>
                        <button className='btn-access'><Link to={`/item/${id}`} className = 'btn-text'>Detalles</Link></button>
                    </div>

                </div>
            </section>
        
        
        </>
    )
}

export default Item