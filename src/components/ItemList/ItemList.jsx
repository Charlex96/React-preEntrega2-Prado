import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ropas}) => {
  return (
    <>
      <div className='item-list'>

        {ropas?.map((ropa) => (
          <Item
            key={ropa.id}
            id={ropa.id}
            name={ropa.name}
            description={ropa.description}
            price={ropa.price}
            stock={ropa.stock}
            category={ropa.category}
          />
        ))}
        
      </div>
    
    </>
  )
}

export default ItemList