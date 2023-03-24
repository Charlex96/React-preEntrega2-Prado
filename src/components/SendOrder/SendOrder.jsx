import React, { useContext, useEffect, useState } from 'react'
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from '../../context/ShoppingCartContext';
import DialogUI from '../Dialog/DialogUI';

const SendOrder = ({cartItem, total}) => {

    const [cart, setCart] = useContext(CartContext);

    const [open, setOpen] = useState(false);

    const [orderId, setOrderId] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [totalPrecio, setTotalPrecio] = useState("");


    const [habilitado, setHabilitado] = useState(true);

    // let message = '';


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        if (cartItem === 0) {
            setHabilitado(false);
        } else {
            setHabilitado(true);
        }
    },[cartItem]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === "" || lastName === "" || email === "") {
            alert("No pueden existir campos vacios");
            
        } else {
            addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));

        }
        setEmail(" ");
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orden");

    const order = {
        firstName,
        lastName,
        email,
        comments,
        cantidad,
        totalPrecio
    };


    return (
        <>

            <div className='card-container-form'>

                <h2>Datos de la compra</h2>
                <br />
                <div className='total-container'>
                    <h3>CANTIDAD: {cartItem} prendas</h3>
                    <h3 className='txt-total'>TOTAL:  U$D {total}</h3>
                </div>
                <br />
                <hr />

                <form action="" onSubmit={handleSubmit}>

                    <h4>Nombre:</h4>
                    <input type="text" placeholder='Tu nombre' disabled ={!habilitado} onChange={(e) => setFirstName(e.target.value)}/>

                    <h4>Apellido:</h4>
                    <input type="text" placeholder='Tu apellido' disabled ={!habilitado} onChange={(e) => setLastName(e.target.value)}/>

                    <h4>Correo Electrónico:</h4>
                    <input type="email" placeholder='tu_correo@gmail.com' disabled ={!habilitado} onChange={(e) => setEmail(e.target.value)}/>

                    <h4>Comentarios:</h4>
                    <input type="text" placeholder='Deja aquí tus comentarios' disabled ={!habilitado} onChange={(e) => setComments(e.target.value)}/>

                    <div className='container-enviar'>
                        <button 
                            className='btn-access' 
                            disabled ={!habilitado} 
                            onClick = {() => {
                                setCart([]);
                                setCantidad(cartItem);
                                setTotalPrecio(total);
                                handleClickOpen();
                                
                            }}
                            >Enviar
                        </button>
                    </div>

                </form>

                <DialogUI
                    open = {open}
                    handleClose = {handleClose}
                    message = {'Gracias por tu compra! Agradecemos tu apoyo y esperamos que disfrutes mucho tu nueva adquisición.'}
                
                />



            </div>
        
        
        </>
    )
}

export default SendOrder