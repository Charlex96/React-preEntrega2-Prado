import React from 'react'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemListCompras from './ItemListCompras';

const Compras = () => {


    const [ordenes, setOrden] = useState([]);

    useEffect(() =>{
        const db = getFirestore();
        const ropasCollection = collection(db, 'orden');

        getDocs(ropasCollection).then((sanpshot) => {
            const ordenes = sanpshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setOrden(ordenes);
        })
    }, []);

    return (
        <>

            <div className='heading'>
                <h2>Compras</h2>
            </div>

            <div className='item-list-container'>
                <ItemListCompras ordenes={ordenes}/>
            </div>
        
        </>
    )
}

export default Compras