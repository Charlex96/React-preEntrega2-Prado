import React from 'react'
import ItemCompras from './ItemCompras'

const ItemListCompras = ({ordenes}) => {

    console.log(ordenes)
    return (
        <>

            <div className='item-list'>

                {ordenes?.map((orden) => (
                    <ItemCompras
                        key={orden.id}
                        id={orden.id}
                        cantidad = {orden.cantidad}
                        comments={orden.comments}
                        email={orden.email}
                        firstName={orden.firstName}
                        lastName={orden.lastName}
                        totalPrecio={orden.totalPrecio}
                    />
                ))}
                

            </div>

        </>
    )
}

export default ItemListCompras