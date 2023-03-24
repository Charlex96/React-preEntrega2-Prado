import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/ShoppingCartContext';
import SendOrder from '../SendOrder/SendOrder';

const Cart = () => {

  let total = 0;
  let cantidad = 0;

  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const eliminarItem = (id) => {
    const nuevaMatriz = cart.filter(item => item.id !== id);
    setCart(nuevaMatriz);
  }

  let sumarProductos = (cart) => {
    const subtotal = cart.reduce((acumulado, ropa) => {
      return acumulado + (ropa.quantity * ropa.price);
    }, 0);

    return subtotal;
  }

  let sumarCantidad = (cart) => {
    const cantidad = cart.reduce((acumulado, ropa) => {
      return acumulado + ropa.quantity;
    }, 0);

    return cantidad;
  }

  total = sumarProductos(cart);
  cantidad = sumarCantidad(cart);

  return (
    <>
      <div className='container-title-cart'>
        <h1>Carrito</h1>

        {cart.length == 0
          ?  <p>No hay productos en el carrito</p>
          :  <p>Tienes {cart.length} catégorias en el carrito</p>
        }

      </div>

      <div className='item-list'>

        {cart.map((item) => {

          let subtotal = (item.quantity) * (item.price);

          console.log(item.image);

          return(

            <section className='card-container' key={item.id}>

              <div className='card'>
                  <div className='card-seccion1'>
                      <img src={item.image} alt="Imagen" />
                  </div>

                  <div className='card-seccion2'>
                      <h2>{item.name}</h2>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio: U$D {item.price}</p>
                      <p>Subtotal: U$D {subtotal}</p>
                  </div>

                  <div className='card-btn'>
                      <button key={item.id} className='btn-access' onClick={() => eliminarItem(item.id)}>Eliminar</button>
                  </div>

              </div>       
            </section>

          );

        })}
        
      </div>


      <SendOrder 
        cartItem = {cantidad}
        total = {total}
      />

    
    </>
  )
}

export default Cart