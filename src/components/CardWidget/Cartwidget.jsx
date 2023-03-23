import React, { useContext } from 'react'

import { CartContext } from '../../context/ShoppingCartContext';

const Cartwidget = () => {

    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <>
            <div className='container-cart'>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>{quantity}</span>
            </div>
        </>
    )
}

export default Cartwidget