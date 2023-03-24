import React from 'react';
import { useParams } from "react-router-dom";
import ropaImage from '/src/assets/imgs/ropa.jpg';
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ropas}) => {

  const { id } = useParams();

  const [producto, setProducto] = useState([]);


  useEffect(() => {
    const db = getFirestore();

    const ropaRef = doc(db, "ropa", `${id}`);

    getDoc(ropaRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);


  const ropaFilter = ropas.filter((ropa) => ropa.id == id);

  
  return (
    <>

      {ropaFilter?.map((ropa) => (
        <section className='card-container' key={ropa.id}>

          <div className='card'>
              <div className='card-seccion1'>
                  <img src={ropa.image} alt="Imagen" />
              </div>
  
              <div className='card-seccion2'>
                  <h2>{ropa.name} </h2>
                  <p className='txt-description'>Descripción: {ropa.description}</p>
                  <p>Categoria: {ropa.category}</p>
                  <p className='txt-stock'>Stock: {ropa.stock}</p>
                  <p className='txt-price'>Precio: U$D {ropa.price}</p>
              </div>

              <ItemCount
                stock = {ropa.stock}
                id = {ropa.id}
                price = {ropa.price}
                name = {ropa.name}
                image = {ropa.image}
              />
  
            </div>

          </section>
      ))}


    </>
  )
}

export default ItemDetail