import React from 'react'

const ItemCompras = ({id,cantidad, comments, email, firstName, lastName, totalPrecio}) => {
    console.log(cantidad)
    return (
        <>

            <section className='card-container' key={id}>

                <div className='card'>

                    <div className='card-seccion2'>
                        <p>ID Compra: {id} </p>
                        <br />
                        <p>Cantidad: {cantidad}</p>
                        <p>{email}</p>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                        <br />
                        <p>Comentarios: {comments}</p>
                        <br />
                        <p className='txt-stock'>Total: {totalPrecio}</p>
                    </div>


                </div>
            </section>
        
        </>
    )
}

export default ItemCompras