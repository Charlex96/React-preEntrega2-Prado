import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import ropaImage from '/src/assets/imgs/ropa.jpg'


const ItemDetail = ({ropas}) => {

  
  const { id } = useParams();
  console.log(id);

  const ropaFilter = ropas.filter((ropa) => ropa.id == id);

  
  return (
    <>

      {ropaFilter?.map((ropa) => (
        <section className='card-container' key={ropa.id}>

          <div className='card'>
              <div className='card-seccion1'>
                  <img src={ropaImage} alt="Imagen" />
              </div>
  
              <div className='card-seccion2'>
                  <h2>{ropa.name} </h2>
                  <p className='txt-description'>Descripción: {ropa.description}</p>
                  <p>Categoria: {ropa.category}</p>
                  <p className='txt-stock'>Stock: {ropa.stock}</p>
                  <p className='txt-price'>Precio: U$D {ropa.price}</p>
              </div>

  
              <div className='card-btn'>

                <div className='container-count'>
                  <button> - </button>
                  <h2>1</h2>
                  <button> + </button>
                </div>
                
                <p>cantidad seleccionada: 1</p>
                <button className='btn-access'>Comprar</button>
              </div>
  
            </div>

          </section>
      ))}


</>
  )
}

export default ItemDetail