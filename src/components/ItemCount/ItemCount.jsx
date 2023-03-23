import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/ShoppingCartContext'
import DialogUI from '../Dialog/DialogUI';

const ItemCount = ({stock, id, price, name}) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  }

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };



  return (
    <>

      <div className='card-btn'>

      <div className='container-count'>
        { count < 1 
          ? (<button disabled> - </button>)
          : (<button onClick={substractQty}> - </button>)
        }

        <h2>{count}</h2>

        {count < stock 
          ? (<button onClick={addQty}> + </button>)
          : (<button disabled> + </button>)
        }
      </div>

      <p>cantidad seleccionada: {count}</p>

      <Link to={"/cart"}>
        <button 
          className='btn-access' 
          onClick={() => {
            addToCart();

          }}
          >Añadir
        </button>
      </Link>
      
      </div>

    </>
  )
}

export default ItemCount